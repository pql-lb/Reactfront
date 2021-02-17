import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import {getPhotoData, dictCreate, avLikesDictionary, scoreList} from '../utils/hashtagHelpers'; 


class Hashtags extends React.Component {
    state = {
        loggedOut: false,
        promisesCompleted: false
    }
    componentDidMount() {
        let like_count = 0;
        let av_likes;
        let dict = [ ];
        getPhotoData()
        .then(photoArray => {
            console.log('res', photoArray)
            dictCreate(photoArray, like_count, dict)
            .then(diction => {
                console.log('dictionary', diction)
                avLikesDictionary(diction, av_likes, like_count, photoArray)
                .then(obj => {
                    console.log('obj', obj)
                    scoreList(obj)
                    .then(res => {
                        if(res) {
                            let list = Object.entries(res)
                            list.sort((a,b) => {return b[1] - a[1]})
                            this.setState({
                                promisesCompleted: true,
                                theList: list
                            })
                        }
                    })
                })
            })
        })
    }
    render() {
        const {promisesCompleted, theList} = this.state;
        if (promisesCompleted) {
            theList.map(x => {
                console.log(x)
            })
        }
        return (
            <React.Fragment>
                <div class="hashtagTitle">Hashtags</div> 
                <div class="hashtagDesc">The hashtags that are getting you the most likes are...</div> 
                <div className="hashtagList">
                    {promisesCompleted &&
                        <div className="innerHashtagList">
                            {theList.map((x, i)=> {
                                return (
                                    <div key={i} className="theListItem">
                                        <h1>#{x[0]}</h1>
                                        <h2>{x[1]}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    }    
                    {!promisesCompleted &&
                        <div className="lds-defaultTwo">
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                    }
                </div>               
            </React.Fragment>
        )
    }
}

export default Hashtags;