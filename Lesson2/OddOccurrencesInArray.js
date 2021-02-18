function solution(A) {
    let element = new Set();
  
    for (let i in A) {
      if (!element.has(A[i])) {
        element.add(A[i]);
      } else {
        element.delete(A[i]);
      }
    }
  
    const result = [...element];
    return result[0];
  }