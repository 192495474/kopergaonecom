import API from '../../config';
import { fetchWrapper } from '../../helpers/_Fetch-Wrapper';
var baseUrl=`${API}`

export const productService={
getCategories,
create
}

function getCategories(){
return fetchWrapper.get(baseUrl+"/categories");
} 
function create(params) {
    return fetchWrapper.post(baseUrl+"/product/create", params);
}

