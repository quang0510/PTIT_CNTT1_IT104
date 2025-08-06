function insertArr(arr1, arr2, position) {
  if (position < 0 || position > arr1.length) {
    console.log('Vi tri chen khong hop le');
    return;
  }

  let result = [];
  let i;

  for (i = 0; i < position; i++) {
    result[result.length] = arr1[i];
  }

  for (i = 0; i < arr2.length; i++) {
    result[result.length] = arr2[i];
  }

  for (i = position; i < arr1.length; i++) {
    result[result.length] = arr1[i];
  }

  console.log('Kết quả:', result);
}
