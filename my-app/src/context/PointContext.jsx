import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getApiUrl } from '../config/api';
import toast from 'react-hot-toast';

const PointContext = createContext();

export const usePoints = () => {
    const context = useContext(PointContext);
    if (!context) {
        throw new Error('usePoints must be used within a PointProvider');
    }
    return context;
};

// 보상 정책 (IncentivePolicy 시뮬레이션)
const REWARD_POLICIES = {
    EXERCISE: { condition_value: 5, points_awarded: 100, description: '운동 5회 달성' },
    DIET: { condition_value: 3, points_awarded: 50, description: '식단 기록 3회' },
    ATTENDANCE: { condition_value: 10, points_awarded: 200, description: '출석 10회 달성' },
    GOAL: { condition_value: 2, points_awarded: 80, description: '목표 설정 2개' }
};

export const PointProvider = ({ children }) => {
    const { user, refreshUser } = useAuth();
    const [totalPoints, setTotalPoints] = useState(0);
    const [achievementLogs, setAchievementLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // 사용자 포인트 로드
    useEffect(() => {
        if (user?.member_id) {
            fetchUserPoints();
        } else {
            setTotalPoints(0);
            setAchievementLogs([]);
            setLoading(false);
        }
    }, [user?.member_id]);

    // 주기적으로 포인트 새로고침 (3초마다)
    useEffect(() => {
        if (!user?.member_id) return;

        const interval = setInterval(() => {
            fetchUserPoints();
        }, 3000);

        return () => clearInterval(interval);
    }, [user?.member_id]);

    const fetchUserPoints = async () => {
        if (!user?.member_id) return;

        try {
            setLoading(true);

            // 서버에서 포인트 조회
            const pointsRes = await fetch(getApiUrl(`/api/points/${user.member_id}`));
            if (pointsRes.ok) {
                const pointsData = await pointsRes.json();
                setTotalPoints(pointsData.total_points || 0);
            }

            // 성취 로그 조회
            const logsRes = await fetch(getApiUrl(`/api/points/achievements/${user.member_id}`));
            if (logsRes.ok) {
                const logsData = await logsRes.json();
                setAchievementLogs(logsData);
            }
        } catch (error) {
            console.error('포인트 로드 실패:', error);
        } finally {
            setLoading(false);
        }
    };

    // 포인트 추가
    const addPoints = async (points, description = '포인트 획득') => {
        if (!user?.member_id) {
            toast.error('로그인이 필요합니다');
            return;
        }

        try {
            const response = await fetch(getApiUrl('/api/admin/add-points'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    member_id: user.member_id,
                    points: points
                })
            });

            if (response.ok) {
                await fetchUserPoints();
                await refreshUser();
                toast.success(`${description} (+${points}P)`, {
                    icon: '🎉',
                    duration: 3000
                });
            }
        } catch (error) {
            console.error('포인트 추가 실패:', error);
            toast.error('포인트 추가에 실패했습니다');
        }
    };

    // 포인트 차감 (교환 시)
    const subtractPoints = async (points) => {
        // RewardShop에서 교환 API를 직접 호출하므로
        // 여기서는 로컬 상태만 업데이트
        setTotalPoints(prev => Math.max(0, prev - points));

        // 서버에서 최신 포인트 다시 가져오기
        if (user?.member_id) {
            await fetchUserPoints();
            await refreshUser();
        }
    };

    // 포인트 직접 설정
    const setPoints = (points) => {
        setTotalPoints(points);
    };

    // 배치 보상 체크 함수들은 현재 사용하지 않으므로 빈 함수로 유지
    const checkExerciseBatchReward = () => null;
    const checkDietBatchReward = () => null;
    const checkAttendanceBatchReward = () => null;
    const checkGoalBatchReward = () => null;

    const value = {
        totalPoints,
        addPoints,
        subtractPoints,
        setPoints,
        achievementLogs,
        checkExerciseBatchReward,
        checkDietBatchReward,
        checkAttendanceBatchReward,
        checkGoalBatchReward,
        REWARD_POLICIES,
        loading,
        refreshPoints: fetchUserPoints
    };

    return (
        <PointContext.Provider value={value}>
            {children}
        </PointContext.Provider>
    );
};
