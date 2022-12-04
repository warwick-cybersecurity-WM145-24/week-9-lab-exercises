GET http://localhost:3000/poem/11

HTTP/1.1 200
[Asserts]
jsonpath "$.id" == 11    # Check the poemId
jsonpath "$.title" exists
jsonpath "$.content" exists
