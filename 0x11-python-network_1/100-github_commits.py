#!/usr/bin/python3
"""
list 10 commits (from the most recent to oldest) of the repository “rails”
by the user “rails”
"""
import requests
import sys

def main():
    """
    main function
    """
    repo_name = sys.argv[1]
    owner_name = sys.argv[2]
    url = f"https://api.github.com/repos/{owner_name}/{repo_name}"
    response = requests.get(url)
    if response.status_code == 200:
        print(response.json())
    else:
        print(f"Error: {response.status_code}")

if __name__ == "__main__":
    main()
