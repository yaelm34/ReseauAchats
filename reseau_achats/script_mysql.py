def write_inserts_user(number_rows):

    array_inserts = []
    i = 0

    while i <= number_rows:
        array_inserts[i] = "insert into utilisateur (nom, prenom, influenceur) values(concat(\"nomuser\" , count), concat(\"prenomuser\" , count), false);"
        f = open("C:\Users\samir\Desktop\script_insert_users.txt", "a")
        f.write("Now the file has more content!")
        f.close()
        i+=1


if __name__ == '__main__':

    print('hello')