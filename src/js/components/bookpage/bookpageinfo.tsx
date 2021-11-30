import React from 'react';

require('../../../style/bookpage_display/BPD_info.scss');

{/*
==================================================================
    Elements to be included on the Book Display Page
    - Title
    - Author
    - Publish
        a. publisher
        b. publish date
    - Description
    - ISBN identifier
    - Page Count
    - Image

==================================================================
*/}

export default function bookpageinfo() {
    return (
        <>
            <div className="bpd_container">
                <div className="body_container">
                    <div className="item main_content">
                        <div className="item primary_info_container">
                            <div className="item title_container">
                                Title
                            </div>
                            <hr />
                            <div> </div>
                            <div> </div>
                            <div> </div>
                            {/*Add Info here*/}
                            <div className="item author_container">
                                Author(s)
                            </div>
                            <hr />
                            {/*Add Info here*/}
                            <div className="item page_count">
                                Page Count
                            </div>
                            <hr />

                            <div className="item publish_info_container">
                                Publishing Information
                            </div>
                            <hr />
                                <p>Publisher: </p>
                                <p>Publish Date: </p>
                            {/*Add Info here*/}
                            <div className="item description_container">
                                Description
                            </div>
                            <hr />
                            {/*Add Info here*/}


                        </div>
                    </div>
                    <div className="item sidebar_left">
                        <div className="item book_container">
                            {/*<img alt="site" id="defaultbookimg" src={defaultbookimg} width="300px" height="400px"></img>*/}
                        </div>
                        <div className="item button_container">
                            <button className="bookshelf-add">Add - bookshelf</button>
                            <button className="bookshelf-remove">Remove - bookshelf</button>
                        </div>
                    </div>
                </div>
                <div className="item review_section">
                    Post your reviews about this book!
                    
                </div>

                <footer className="item">
                    Disclaimer:
                </footer>
            </div>

            {/*
            
            </div>


            

                <div className="container">
                    <div className="Stats-card-content">
                        <div className="front">Book Stats</div>
                        <div className="back">
                            <ul>
                                <li className="stats-content">Publisher: Placeholder </li>
                                <li className="stats-content">Publish Location: Placeholder </li>
                                <li className="stats-content">Publish Date: Placeholder </li>
                                <li className="stats-content">ISBN: Placeholder </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>


            <div className="Book-info">



                <h1>Summary</h1>
                <br />

                <div className="summary_box-bg">
                    <div className="summary-div">
                        <div className="summary-object">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
                            assumenda quibusdam minima suscipit quia porro ullam nobis, dolorum deleniti doloribus veritatis laudantium
                            exercitationem dicta accusantium necessitatibus incidunt nostrum eligendi. Soluta!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aliquam sint modi voluptas quis inventore magni, placeat natus earum consequatur. Nulla, qui?
                            Necessitatibus nobis ipsam facere, odit quos autem molestias.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem corporis asperiores ducimus, nobis excepturi, commodi aut ea magni esse molestiae
                            cumque nisi, repellat natus sed assumenda provident dicta deserunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cupiditate ducimus ex modi recusandae ratione commodi ullam eveniet in quisquam maiores adipisci
                            facere officiis saepe accusamus a. Dignissimos, amet exercitationem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
                            assumenda quibusdam minima suscipit quia porro ullam nobis, dolorum deleniti doloribus veritatis laudantium
                            exercitationem dicta accusantium necessitatibus incidunt nostrum eligendi. Soluta!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aliquam sint modi voluptas quis inventore magni, placeat natus earum consequatur. Nulla, qui?
                            Necessitatibus nobis ipsam facere, odit quos autem molestias.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem corporis asperiores ducimus, nobis excepturi, commodi aut ea magni esse molestiae
                            cumque nisi, repellat natus sed assumenda provident dicta deserunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cupiditate ducimus ex modi recusandae ratione commodi ullam eveniet in quisquam maiores adipisci
                            facere officiis saepe accusamus a. Dignissimos, amet exercitationem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
                            assumenda quibusdam minima suscipit quia porro ullam nobis, dolorum deleniti doloribus veritatis laudantium
                            exercitationem dicta accusantium necessitatibus incidunt nostrum eligendi. Soluta!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aliquam sint modi voluptas quis inventore magni, placeat natus earum consequatur. Nulla, qui?
                            Necessitatibus nobis ipsam facere, odit quos autem molestias.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem corporis asperiores ducimus, nobis excepturi, commodi aut ea magni esse molestiae
                            cumque nisi, repellat natus sed assumenda provident dicta deserunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cupiditate ducimus ex modi recusandae ratione commodi ullam eveniet in quisquam maiores adipisci
                            facere officiis saepe accusamus a. Dignissimos, amet exercitationem.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, nam quas praesentium perspiciatis beatae, quam perferendis libero autem sapiente
                            distinctio molestias blanditiis maiores soluta accusamus voluptatem exercitationem neque delectus a.
                        </div>
                    </div>
                </div>


            </div>


        */}

        </>
    )
}