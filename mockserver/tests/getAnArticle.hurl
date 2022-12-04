GET http://localhost:3000/article/11

HTTP/1.1 200
[Asserts]
jsonpath "$.articleId" == 11    # Check the articleId
jsonpath "$.title" exists
jsonpath "$.content" exists
