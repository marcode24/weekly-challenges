const orthogonalVectors = (v1, v2) => v1[0] * v2[0] + v1[1] * v2[1] === 0;

module.exports = orthogonalVectors;
