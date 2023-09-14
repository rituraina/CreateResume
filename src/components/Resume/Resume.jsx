import React, {useState,useEffect} from 'react'
import styles from './Resume.module.css'
import {Mail, GitHub, Linkedin, Phone,Paperclip} from 'react-feather';

function Resume(props) {
const information = props.information;
const sections=props.sections;
  const [columns,setColumns]=useState([[], []]);

const info={
  workExp:information[sections.WorkExp],
 project:information[sections.project],
  achievement:information[sections.achievement],
  education:information[sections.education],
 basicInfo:information[sections.basicInfo],
  summary:information[sections.summary],
  other:information[sections.other],
};

const getFormattedDate=(value)=>{
  if(!value)return""
const date=new Date(value)
return`${date.getDate()}/${date.getMonth() + 1 > 9 ? date.getMonth + 1: "0" + date.getMonth() + 1}/
${date.getFullYear()}`;
};

  const workExpSection =(
  <div key={"workexp"} className={`${styles.section} ${styles.workExp}`}>
    <div className={`${styles.sectionTitle}`}></div>
    <div className={styles.content}>
      {
        info.workExp?.details?.map((item)=>(     
      <div className={styles.item} key={item.title}>
        {/* {item.titel && <p className={styles.title}>{item.title}</p>} */}
        <p className={styles.title}>{item.title}</p>
        <p className={styles.subTitle}>{item.companyName}</p>
       
        <a className={styles.link}> href={item.certificationLink}
           <Paperclip/>{item.certificationLink}</a>
        <a className={styles.link}><GitHub/> https://github.com/wefsfe/wef</a>
        <div className={styles.date}>
          <calender/> {getFormattedDate(item.startDate) -
          getFormattedDate(item.endDate)}
        </div>
        <p className={styles.date}>
        <MapPin/> Remote
        </p>
       
        <ul className={styles.points}>
          <li className={styles.point}>It is point one</li>
          <li className={styles.point}>It is point two</li>
          <li className={styles.point}>It is point three</li>
          <li className={styles.point}>It is point four</li>
        </ul>
      </div>
        ))}
    </div>
  </div>
  );
  const projectSection =(
    <div key={"project"} className={`${styles.section} ${styles.project}`}>
      <div className={styles.sectionTitle}>Projects</div>
      <div className={styles.content}>
      <div className={styles.item}>
        <p className={styles.title}>Project 1</p>
        {/* <p className={styles.subTitle}>company Name</p> */}
        {/* <div className={styles.date}>
          <calender/> 01/01/2020 - 01/12/2024
        </div> */}
        <a className={styles.link}> <Paperclip/> https://we4fwe4f.com/wefwsfe/wef</a>
        <a className={styles.link}><GitHub/> https://github.com/wefsfe/wef</a>
        <p className={styles.overview}>
         This project is a dummy project built with nothing
        </p>
        <ul className={styles.points}>
          <li className={styles.point}>It is point one</li>
          <li className={styles.point}>It is point two</li>
          <li className={styles.point}>It is point three</li>
          <li className={styles.point}>It is point four</li>
        </ul>
      </div>
    </div>
    </div>
    );
    const educationSection =(
      <div key={"education"} className={`${styles.section} ${styles.education}`}>
        <div className={styles.sectionTitle}>Education</div>
        <div className={styles.content}>
      <div className={styles.item}>
        <p className={styles.title}>B.tech</p>
        <p className={styles.subTitle}>Some college name </p>
        <div className={styles.date}>
          <calender/> 01/01/2020 - 01/12/2024
        </div>
      </div>
    </div>
      </div>
      );
      const achievementSection =(
        <div key={"achievement"} className={`${styles.section} ${styles.achievement}`}>
          <div className={styles.sectionTitle}>Achievements</div>
          <div className={styles.content}>
          <ul className={styles.numbered}>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
            <li>Achievement 3</li>
            <li>Achievement 4</li>
          </ul>
       </div>
        </div>
        );
        const summarySection =(
          <div key={"summary"} className={`${styles.section} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Summary</div>
            <div className={styles.content}>
              <p className={styles.overview}>This is dummy basic summary</p>
            </div>
          </div>
          );
          const otherSection =(
            <div key={"other"} className={`${styles.section} ${styles.other}`}>
              <div className={styles.sectionTitle}>Other</div>
              <div className={styles.content}>
              <p className={styles.overview}>This is dummy data ... others</p>
            </div>
            </div>
            );

    useEffect(()=>{
      setColumns([
         [projectSection, educationSection, summarySection],
         [workExpSection, achievementSection, otherSection],
      ]);
    },[]);
    


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Block chain developer</p>

        <div className={styles.links}>
          <a className={styles.link}><Mail/>Email@gmail.com</a>
          <a className={styles.link}><Phone/>1234567890</a>
          <a className={styles.link}><Linkedin/>https://linkedin.in/aswewef</a>
          <a className={styles.link}><GitHub/>https://github.in/aswewef</a>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.col1}>
          {
            columns[0]
          }
        </div>
        <div className={styles.col2}>
          {
            columns[1]
          }
        </div>
      </div>
    </div>
  );
}

export default Resume;
