import requests

url = "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo"

response = requests.request("GET", url, verify=False)

print(response.text)


# url = "https://mboum.com/api/v1/ne/news/?symbol=AAPL&apikey=demo"

# payload = {}
# headers = {}

# response = requests.request(
#     "GET", url, headers=headers, data=payload, verify=False)

# print(response.text)
