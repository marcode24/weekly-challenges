// getting params using split and map
const getParams = (url) => {
  const params = url.split('?')[1]?.split('&');
  return params && params.every((param) => param.length > 0)
    ? params.map((param) => param.split('=')[1])
    : [];
};

// getting params using URL API
const getParamsAPI = (url) => {
  const paramsArray = [];
  const params = new URL(url).searchParams;
  params.forEach((param) => paramsArray.push(param));
  return paramsArray;
};

module.exports = {
  getParams,
  getParamsAPI,
};
