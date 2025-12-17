export default function PostCard({ post, onLike, onDelete, darkMode, userId, isLiked }) {
  const isOwner = String(post.authorId) === String(userId);

  return (
    <div
      className={`p-6 rounded-lg shadow hover:shadow-lg transition ${darkMode
        ? "bg-gray-800 text-white"
        : "bg-white text-gray-900 border border-gray-200"
        }`}
    >
      {/* 헤더 */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">{post.title}</h3>
            {post.isOfficial && (
              <span className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white">
                공식
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm px-2 py-1 rounded-md ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                }`}
            >
              #{post.category || "추천"}
            </span>
            <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {post.author} | {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* 공식 게시글: 고정핀, 사용자 게시글: 좋아요 버튼 */}
        {post.isOfficial ? (
          <div className="px-4 py-2 ml-4">
            <span className="text-3xl">📌</span>
          </div>
        ) : (
          <button
            onClick={onLike}
            className={`px-4 py-2 rounded-md transition whitespace-nowrap ml-4 ${isLiked
              ? "bg-pink-600 text-white"
              : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
          >
            {isLiked ? "❤️ " + (post.likes || 0) : `❤️ ${post.likes || 0}`}
          </button>
        )}
      </div>

      {/* 설명 */}
      {post.content && (
        <p className={`mb-4 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {post.content}
        </p>
      )}

      {/* 운동 루틴 표시 */}
      {post.exercises && post.exercises.length > 0 && (
        <div className="mb-4">
          <h4 className={`font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
            운동 루틴
          </h4>
          <div className="space-y-2">
            {post.exercises.map((exercise, index) => (
              <div
                key={index}
                className={`p-3 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"
                  }`}
              >
                <div className="font-medium">
                  {exercise.name} - {exercise.sets}세트 × {exercise.reps}
                </div>
                {exercise.rest && (
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    휴식: {exercise.rest}
                  </div>
                )}
                {exercise.tip && (
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    팁: {exercise.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
          {post.difficulty && (
            <div className={`mt-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              난이도: {post.difficulty}
            </div>
          )}
        </div>
      )}

      {/* 식단 정보 표시 */}
      {post.meals && post.meals.length > 0 && (
        <div className="mb-4">
          <h4 className={`font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
            식단 구성
          </h4>
          <div className="space-y-2">
            {post.meals.map((meal, index) => (
              <div
                key={index}
                className={`p-3 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"
                  }`}
              >
                {/* 사용자 작성 식단 (간단한 구조) */}
                {meal.time && meal.menu && !meal.meal && (
                  <>
                    <div className="font-medium">{meal.time}</div>
                    <div className={`text-sm mt-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {meal.menu}
                    </div>
                    {meal.calories && (
                      <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        칼로리: {meal.calories}kcal
                      </div>
                    )}
                  </>
                )}

                {/* 공식 식단 (복잡한 구조 - meal, time, foods) */}
                {meal.meal && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-lg">{meal.meal}</div>
                      {meal.time && (
                        <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {meal.time}
                        </div>
                      )}
                    </div>

                    {/* foods 배열 표시 */}
                    {meal.foods && meal.foods.length > 0 && (
                      <div className={`space-y-1 mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {meal.foods.map((food, foodIndex) => (
                          <div key={foodIndex} className="flex justify-between text-sm">
                            <span>• {food.name} {food.amount}</span>
                            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                              {food.calories}kcal
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {meal.total_calories && (
                      <div className={`text-sm font-semibold pt-2 border-t ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"
                        }`}>
                        소계: {meal.total_calories}kcal
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          {post.calories && (
            <div className={`mt-3 p-2 rounded-md text-center font-bold ${darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-200 text-gray-800"
              }`}>
              총 칼로리: {post.calories}kcal
            </div>
          )}
        </div>
      )}

      {/* 팁 */}
      {post.tips && (
        <div className={`mb-4 p-3 rounded-md ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
          <div className={`text-sm ${darkMode ? "text-gray-300" : "text-blue-900"}`}>
            <strong>팁:</strong> {post.tips}
          </div>
        </div>
      )}

      {/* 삭제 버튼 (소유자만) */}
      {isOwner && !post.isOfficial && (
        <div className="flex justify-end">
          <button
            onClick={() => {
              if (window.confirm("정말 이 글을 삭제하시겠습니까?")) {
                onDelete(post.id);
              }
            }}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition text-sm"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
}