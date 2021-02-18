function solution(X, Y, D) {
    const minDistance = Y - X;
    return minDistance % D
      ? Math.floor(minDistance / D) + 1
      : Math.floor(minDistance / D);
  }
  