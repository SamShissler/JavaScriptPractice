import requests

url = "https://thequoteshub.com/api/"

# Send the GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the response data as JSON
    data = response.json()
    print(data["text"], data["author"])
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")

url = "https://xkcd.com/info.0.json"

response = requests.get(url)
if response.status_code == 200:
    data=response.json()
    print(data)
else:
    print("We Suck and can't do it")