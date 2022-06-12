function extract (input) {
  const queryStart = input.indexOf('?')
  return queryStart === -1 ? input : input.slice(queryStart+1) 
}

function removeHash (input) {
  const hashStart = input.indexOf('#')
  return hashStart === -1 ? input : input.slice(0, hashStart)
}

export const queryString = (searchParamsString = '') => {
  if (typeof searchParamsString === 'string' && searchParamsString.length > 0) {
    searchParamsString = removeHash(searchParamsString)
    searchParamsString = extract(searchParamsString)
    return searchParamsString.split('&')
      .reduce(function (searchParams, curKV) {
        var arr = curKV.split('=').map(decodeURIComponent);
        searchParams[arr[0]] = arr[1];
        return searchParams;
      }, {});
  }
  return ''
}
