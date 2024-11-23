import React from 'react';

import * as Cites from './info/citations'
import { Link } from 'react-router-dom';
import ReturnHomeBtn from '../components/ReturnHomeBtn';

function Citations() {
    var spanStyle = {
        fontSize: "4.5vw",
        textTransform: "uppercase"
    };


    return (
        <div className='citations'>
            <h1>Citations</h1>

            <section id='text-cites'>
                <h2>Text Citations</h2>
                {Cites.textCitations2.map((c, index) =>(
                    <div className="text-citation" key={index}>
                        <p>
                        {c.citation && <span>{c.citation}</span>}
                        {c.url && (
                            <a href={c.url} target="_blank" >
                                {c.url}
                            </a>
                        )}
                        </p>
                    </div>
                ))}
            </section>


            <section>
                <h2>Photo Citations</h2>
                {Cites.imgCitations2.map((c, index) =>(
                    <div className="photo-citation" key={index}>
                        <p>
                            {c.citation && <span>{c.citation}</span>}
                            {c.url && (
                                <a href={c.url} target="_blank" >
                                    {c.url}
                                </a>
                            )}
                        </p>
                    </div>
                ))}
            </section>

           <ReturnHomeBtn />

        </div>
    )
}

export default Citations