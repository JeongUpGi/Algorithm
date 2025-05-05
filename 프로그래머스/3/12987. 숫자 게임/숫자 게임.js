function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let score = 0;
    let aIdx = 0;
    let bIdx = 0;

    while (aIdx < A.length && bIdx < B.length) {
        if (B[bIdx] > A[aIdx]) {
            score++;
            aIdx++;
            bIdx++;
        } else {
            bIdx++; // 이길 수 없으면 다음 B 카드 확인
        }
    }

    return score;
}

// 1 3 5 7
// 2 2 6 8