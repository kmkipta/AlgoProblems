/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var vol = 0;
    for (var i = 0; i < height.length; i++) {
        for (var j = 0; j < height.length; j++) {
            var minHeight = Math.min(height[i], height[j]);
            var length = Math.abs(i - j);
            var newVol = minHeight * length;
            vol = (vol < newVol) ? newVol : vol;
        }
    }
    return vol;
};
