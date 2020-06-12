from collections import deque

friends = {}

friends["me"] = ["tom", "dick", "harry"]
friends["tom"] = ["me", "dick"]
friends["dick"] = ["me", "tom"]
friends["harry"] = ["me"]

print(friends)


def friend_has_m(name):
    return name[-1] == 'm'


def bfs(name):
    search_friends = deque()
    search_friends += friends[name]
    searched = []
    while search_friends:
        friend = search_friends.popleft()
        if friend not in searched:
            if friend_has_m(friend):
                print friend + "'s name ends in the letter 'm'"
                return True
            else:
                search_friends += friends[friend]
                searched.append(friend)
    return False


print(bfs("me"))

