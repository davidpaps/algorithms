menu = {}

menu["coca cola"] = 0.89
menu["pepsi"] = 0.79
menu["virgin cola"] = 0.69

print(menu)
print(menu["pepsi"])


guest_list = {}


def check_name(name):
    if guest_list.get(name):
        print(name + ' has been used to enter already - NO ENTRY!')
    else:
        guest_list[name] = True
        print('Come right in ' + name + '!')


check_name("david")
check_name("lola")
check_name("david")
