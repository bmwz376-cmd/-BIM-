// 小テスト機能
document.addEventListener('DOMContentLoaded', function() {
  // 全ての小テストコンテナを処理
  document.querySelectorAll('.quiz-container').forEach(container => {
    const submitBtn = container.querySelector('.quiz-submit');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', function() {
      const questions = container.querySelectorAll('.quiz-question');
      let correctCount = 0;
      let totalQuestions = questions.length;

      questions.forEach(question => {
        const options = question.querySelectorAll('input[type="radio"]');
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        
        if (selectedOption) {
          const isCorrect = selectedOption.value === 'correct';
          if (isCorrect) {
            correctCount++;
          }

          // フィードバック表示
          options.forEach(option => {
            const label = option.parentElement;
            if (option.value === 'correct') {
              label.style.background = '#c8e6c9';
              label.style.fontWeight = 'bold';
            } else if (option === selectedOption && !isCorrect) {
              label.style.background = '#ffcdd2';
            }
          });
        }
      });

      // 結果表示
      let resultDiv = container.querySelector('.quiz-result');
      if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result';
        container.appendChild(resultDiv);
      }

      const percentage = Math.round((correctCount / totalQuestions) * 100);
      const isPassing = percentage >= 60;

      resultDiv.className = `quiz-result ${isPassing ? 'correct' : 'incorrect'}`;
      resultDiv.innerHTML = `
        <p>結果: ${correctCount}/${totalQuestions} 問正解 (${percentage}%)</p>
        <p>${isPassing ? '✅ 合格です！' : '❌ もう一度復習しましょう'}</p>
      `;

      // スコアをlocalStorageに保存
      const pageTitle = document.title;
      const scoreData = {
        page: pageTitle,
        score: percentage,
        date: new Date().toISOString(),
        correct: correctCount,
        total: totalQuestions
      };
      
      let scores = JSON.parse(localStorage.getItem('bim-quiz-scores') || '[]');
      scores.push(scoreData);
      localStorage.setItem('bim-quiz-scores', JSON.stringify(scores));

      // ボタンを無効化
      submitBtn.disabled = true;
      submitBtn.textContent = '採点済み';
    });
  });

  // リセットボタンがあれば処理
  document.querySelectorAll('.quiz-reset').forEach(btn => {
    btn.addEventListener('click', function() {
      const container = btn.closest('.quiz-container');
      
      // ラジオボタンをリセット
      container.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
        radio.parentElement.style.background = '';
        radio.parentElement.style.fontWeight = '';
      });

      // 結果を削除
      const result = container.querySelector('.quiz-result');
      if (result) result.remove();

      // 送信ボタンを有効化
      const submitBtn = container.querySelector('.quiz-submit');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '採点する';
      }
    });
  });
});
