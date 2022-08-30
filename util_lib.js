define(["N/query", "N/record", "N/search"], function (query, record, search) {
    
    function isEmpty(stValue) {
            return ((stValue === '' || stValue == null || stValue == undefined) || (stValue.constructor === Array && stValue.length == 0) || (stValue.constructor === Object && (function (v) {
                for (var k in v)
                    return false;
                return true;
            })(stValue)));
     }
    
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] == value);
    }
    
    function getFullResultset (objSearch) {
		let searchResults = [],
			pagedData;
		let searchCols = objSearch.columns;
		
		pagedData = objSearch.runPaged({
			pageSize: 1000
		});
		pagedData.pageRanges.forEach(function(pageRange) {
			let page = pagedData.fetch({
				index: pageRange.index
			});
			page.data.forEach(
				function(result) {
					searchResults.push(result);
			});
		})
        
    
});
