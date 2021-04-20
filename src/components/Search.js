import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Search = () => {

    const [term, setTerm] = useState(' ');
    const [results, setResults] = useState([]);
    console.log('RERENDERING...');
    console.log(results);

    useEffect(() => {
        //ASYNC AWAIT INSTRUCTOR VERSION
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term

                },


            });
            setResults(data.query.search);

        }
        if (term) {
            search();
        }




        // ASYNC AWAIT WITH PROMISES (EDDIE FAV)
        // const eddiesWay = () => {
        //     axios.get('https://en.wikipedia.org/w/api.php', {
        //         params: {
        //             action: 'query',
        //             list: 'search',
        //             origin: '*',
        //             format: 'json',
        //             srsearch: term

        //         },

        //     }).then(payload => {
        //         console.log(`EDDIES PAYLOAD : ${payload}`);

        //         setResults(payload);

        //     }).catch(err => {
        //         if (err) {
        //             console.log(`ERROR: ${err}`);
        //         }
        //     });

        // }

        // if (term) {
        //     eddiesWay();
        // }



    }, [term]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.title}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Me: </label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input" />
                </div>
            </div>

            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;