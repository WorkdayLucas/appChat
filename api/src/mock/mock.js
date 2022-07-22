import models from '../asociations'
const { User, Contact_list } = models

const users = [
    { name: "Melessa", email: "mdayborne0@ycombinator.com", password: "GQEKOU", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Alvan", email: "avandriel1@dedecms.com", password: "Zw25NF8", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Bradford", email: "bwressell2@discuz.net", password: "w1SpGeoM", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Alessandro", email: "aide3@irs.gov", password: "koYA1JM9kJ", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Penny", email: "pchalfain4@usatoday.com", password: "0vmKNsU7eZMt", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Smitty", email: "sszapiro5@nps.gov", password: "McAwk5dM", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Bonnee", email: "bpowles6@mit.edu", password: "RjNN0u4uU", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Chelsae", email: "cvanelli7@senate.gov", password: "3QDiOVGjujd", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Alanna", email: "adare8@home.pl", password: "8wbkyhN5LT", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Percival", email: "pwilkins9@gravatar.com", password: "WUcnAgpJ", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Dorita", email: "dbattlea@statcounter.com", password: "MHvMjJz4", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Sharyl", email: "sconnellyb@csmonitor.com", password: "Ub8dXaaK", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Leif", email: "llerec@blogger.com", password: "40ueS9GgS1Ae", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Shalom", email: "sfairleyd@intel.com", password: "LuxVahs", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Sid", email: "skeoghe@mayoclinic.com", password: "7EoteZ2bSV", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Hiram", email: "hdarwentf@smh.com.au", password: "cCXskozAaEX", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Leona", email: "ldulwichg@about.com", password: "2NwgueE13u", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Marco", email: "mscandrickh@mac.com", password: "iOKl2if", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Valentijn", email: "vpetriki@springer.com", password: "2Vcb69Hkwum", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Michaeline", email: "mcawsej@google.com", password: "DozfjQSwXLJU", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Mikaela", email: "mbarczynskik@squarespace.com", password: "Cdcg9nOpxua", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Ingmar", email: "iraunl@mysql.com", password: "ArD0NLaq", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Malanie", email: "marranm@tripod.com", password: "aL5qvmfLo", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Andreas", email: "aolyfantn@xing.com", password: "0nB60U", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Lionello", email: "llawfordo@adobe.com", password: "ByI46CZvl9", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "George", email: "gbramhallp@exblog.jp", password: "eviBulYSyN", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Gordie", email: "gkingswoodq@fastcompany.com", password: "bApbcqpyA0", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Nelia", email: "nharringtonr@wordpress.org", password: "IVuFxAK", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Efren", email: "ehymers@sun.com", password: "b2bpMoG0OhVU", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Nolana", email: "narchbouldt@bandcamp.com", password: "Wd9oYB9egg4f", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Morly", email: "mvaudreu@google.co.uk", password: "tmtxAGk", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Patten", email: "powlnerv@netvibes.com", password: "mk25bXwRe", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Caryl", email: "ccoitew@xrea.com", password: "S4hZ5OyQ04i", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Moses", email: "mbatchelderx@ucsd.edu", password: "6XGAsSDmJJ", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Marie-jeanne", email: "mashdowny@technorati.com", password: "304DvW", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" },
    { name: "Wandie", email: "whighwayz@chronoengine.com", password: "mwTEjznWw", img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" }
]

export default async function mockData() {

    let i = 0


    while (i < users.length) {
        const isRoleExist = await User.findOne({
            where: {
                email: users[i].email
            }
        })

        if (!isRoleExist) {
            const user = await User.create({ name: users[i].name, email: users[i].email, password: users[i].password, img: users[i].img })
            await Contact_list.create({ name: user.name, userId: user.dataValues.id })
        }
        i++
    }
}