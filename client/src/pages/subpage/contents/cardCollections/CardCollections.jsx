import React, { useState } from 'react';
import ProjectsCateList from '../projects/components/ProjectsCateList';
import axios from 'axios';

export default function CardCollections() {

    const [list, setList] = useState([]);

    const getSort = (e) => {

        setList(e.list)

    }

    axios({

        method: 'get',
        url: 'http://127.0.0.1:8000/house/collections'

    }).then((result) => {

        setList(result.data)

    })

    return (
        <>
            <div className='card_collections_wrap'>
                <div className="card_collections_inner_wrap inner">
                    <ProjectsCateList kind='picture'
                        getSort={getSort} />
                </div>
            </div>
        </>
    );
}

