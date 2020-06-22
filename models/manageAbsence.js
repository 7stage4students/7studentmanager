const Student = require('./studentsModel');
const { time,property } = require('../utils/logger');
student = new Student();


let absence ={
    allStuds:[
        {
            id:'id0',
            course:'webDev',
            level:'level1'
        },{
            id:'id1',
            course:'webDev',
            level:'level1',
        }
    ] ,
    courses:{
        webDev:{
            level:{
                level1:{
                    totalStuds:50,
                    present: 1,
                    _18_06_2020:[
                        {   id:'id0',
                            arrivalTime:'8:34am', 
                        },
                        {   id:'id1',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id2',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id3',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id4',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id5',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id6',
                        arrivalTime:'9:34am', 
                        },
                        {   id:'id7',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id8',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id9',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id10',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id11',
                        arrivalTime:'9:34am', 
                        },
                        {   id:'id12',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id13',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id14',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id15',
                            arrivalTime:'10:02am', 
                        }
                    ],
                    _18_09_2020:[
                        {   id:'id0',
                            arrivalTime:'8:34am', 
                        },
                        {   id:'id1',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id2',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id3',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id4',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id5',
                            arrivalTime:'10:02am', 
                        },
                    ],
                    _17_06_2020:[
                        {   id:'id01',
                            arrivalTime:'8:34am', 
                        },
                        {   id:'id02',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id03',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id04',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id05',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id06',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id03',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id04',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id05',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id06',
                            arrivalTime:'10:02am', 
                        }, 
                        {   id:'id02',
                        arrivalTime:'9:34am', 
                        },
                        {   id:'id03',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id04',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id05',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id06',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id03',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id04',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id05',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id06',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id01',
                        arrivalTime:'8:34am', 
                        },
                        {   id:'id02',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id03',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id04',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id05',
                            arrivalTime:'10:02am', 
                        },
                    ],
                    _16_01_2020:[
                        {   id:'id',
                            arrivalTime:'8:34am', 
                        },
                        {   id:'id0',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id1',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id2',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id3',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id4',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id5',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id6',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id7',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id8',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id9',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id10',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id11',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id12',
                            arrivalTime:'10:02am', 
                        },
                    ],
                    Today:[
                        {   id:'id0',
                            arrivalTime:'8:34am', 
                        },
                        {   id:'id1',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id2',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id3',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id4',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id5',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id6',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id7',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id8',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id9',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id10',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id11',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id12',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id13',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id14',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id15',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id16',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id17',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id18',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id19',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id20',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id21',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id22',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id23',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id24',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id24',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id26',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id27',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id28',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id29',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id30',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id31',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id32',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id33',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id34',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id35',
                            arrivalTime:'9:34am', 
                        },
                        {   id:'id36',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id37',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id38',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id39',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id40',
                            arrivalTime:'9:30am', 
                        },
                        {   id:'id41',
                            arrivalTime:'10:02am', 
                        },
                        {   id:'id42',
                            arrivalTime:'10:02am', 
                        }
                    ],
                    
                },
            level2:{

            }
            }
        },
        digitalMarketing:{}
    }
    
}
// absence.courses[`${details.course}`].level[`${details.level}`][`${property()}`] = []
getAttendanceById =(id) => {
    
    let details = student.get(id);
    let presence = false;
    let attendanceLog = [];
    const absenceList = absence.courses.webDev.level[details.level];
 
    delete absenceList.totalStuds
    delete absenceList.present


    for(let [date,present] of Object.entries(absenceList))
            {
                presence = false
              
                present.forEach(person =>{
                    if(person.id == id){
                        
                        presence = true
                        // console.log(`${presence} on ${date} `)
                        attendanceLog.push({
                            attended: true,
                            date
                        })
        
                    }
                        
                })
                if(!presence){
                    attendanceLog.push({
                        attended: false,
                        date
                    })
                    // console.log(`${presence} on ${date} `)
                }
        }
    console.log(attendanceLog);
}

markAttendanceById = (id) =>{
    let _student = student.get(id);

        if(!absence.courses[`${_student.course}`].level[`${_student.level}`][`${property()}`])
            {
                absence.courses[`${_student.course}`].level.level1[`${property()}`] = []
                absence.courses[`${_student.course}`].level.level1[`${property()}`].push({id,arrivalTime: time()})
            }
        else
            absence.courses[`${_student.course}`].level.level1[`${property()}`].push({id,arrivalTime: time()})
          
}

markDepartureById = () =>{

}

getAttendanceById('id0');

markAttendanceById('id1')

console.log(absence.courses.webDev.level.level1[`${property()}`])

module.exports = absence;
module.exports = {getAttendanceById,markAttendanceById}