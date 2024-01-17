import React, { useEffect, useState } from 'react';
import "../../../../css/sub/contents/projects/projects.css";
import axios from 'axios';
import ProjectsIntroBox from './ProjectsIntroBox';
import ProjectsCateList from './components/ProjectsCateList';

export default function ProjectsWrap() {

    const [list, setList] = useState([]);

    useEffect(() => {

        axios({

            method: 'get',
            url: "http://192.168.50.31:8001/house"

        }).then((res) => {

            setList(res.data)

        })

    }, [])


    const getSort = (e) => {

        setList(e.list)

    }


    return (
        <>
            <div className='projects_wrap'>
                <div className="projects_inner_wrap inner">
                    <ProjectsCateList kind='warming'
                        getSort={getSort}
                    />
                    <div className='projects_all_count_wrap'>
                        <span className='projects_all_count_text'>
                            전체 11,994
                        </span>
                    </div>
                    <div className="projects_house_intro_wrap">
                        {list.map((lst) => (
                            <ProjectsIntroBox
                                key={lst.hid}
                                houseImg={lst.house_img}
                                userImg={lst.userimg}
                                houseTitle={lst.house_title}
                                houseContent={lst.house_content}
                                mid={lst.mid}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

