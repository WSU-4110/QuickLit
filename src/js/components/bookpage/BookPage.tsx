//@ts-ignore
import defaultbookimg from "../../../assets/default_bookimg.jpeg";
import { Review_creation } from "./reviewcreation";
require('../../../style/bookpage/bookpage.scss');

export function BookPage() {
    return (
        <>
            <div className="bg_site"> {/*Start of refining the page*/}

                <div className="left-side"></div>
                <div className="right-side"></div>

            </div>

            <div className="book-info_area">
                <div className="book-cover_area">
                    <img alt="site" id="defaultbookimg" src={defaultbookimg} width="300px" height="300px"></img>
                </div>

                <div className="primary-info">
                    <h1 className="Book-Title">Title:</h1>
                    <h2 className="Book_Rating">Rating:</h2>
                    <h2 className="Book_Genre">Genre:</h2>
                </div>

                <div className="container">
                    <div className="Stats-card-content">
                        <div className="front">Book Stats</div>
                        <div className="back">
                            <ul>
                                <li className="stats-content">Author: Placeholder </li>
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



            {/* 
            <div className="Bookshelf_logger">
                <div className="BS-btns">
                    <button className="Bookshelf-add">Add to bookshelf</button>
                    <div></div>
                    <button className="Bookshelf-remove">Remove from bookshelf</button>
                </div>
            </div>
            */}
            <br></br>
            <div className="bookshelf_buttons">
                <button className="add">Add to Bookshelf</button>
                <br></br>
                <button className="remove">Remove from Bookshelf</button>
            </div>
            
            <div className="review_section">
                <div className="review_column">
                    <div className="review_submission">
                        <Review_creation />
                    </div>
                </div>
            </div>

        </>
    )
}

export default BookPage;