function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length;
  let n = nums2.length;
  let halfLen = Math.floor((m + n + 1) / 2);

  let imin = 0,
    imax = m;

  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = halfLen - i;

    if (i < m && nums2[j - 1] > nums1[i]) {
      imin = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      imax = i - 1;
    } else {
      let maxLeft = 0;
      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return maxLeft;
      }

      let minRight = 0;
      if (i === m) {
        minRight = nums2[j];
      } else if (j === n) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }

      return (maxLeft + minRight) / 2;
    }
  }
}
console.log(findMedianSortedArrays([-1, 0, 1], [2, -1, -4]));
