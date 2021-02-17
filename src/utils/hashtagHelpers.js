export function getPhotoData () {
    return new Promise((res, rej) => {
        window.FB.api('/me/accounts?fields=id', function(response) {
            let id = response.data[0].id;
            window.FB.api(`/${id}?fields=instagram_business_account`, function(response){
                let insta_id = response.instagram_business_account.id;
                window.FB.api(`/${insta_id}/media`, function(response){
                    //console.log("INDIVIDUAL POST IDS", response.data)
                    let photoArray = response.data;
                    if (photoArray !== 'undefined') {
                        res(photoArray)
                    } else {
                        rej(response)
                        const error = document.querySelector(".alert");
                        error.innerHTML = "An error has occurred, please refresh the page."
                    }
                })
            })
        })
    })
}

function help(str, num, prev, arr) {
    if (str.length === 0) {
        return arr.join('').split('#');
    }
    //On the hashtag
    if(str[num] === '#') {
        arr.push(str[num])
        str.shift()
        return help(str, num, true, arr)  
        //Not on hashtag
    } else if(str[num] !== '#') {
        //Last was a hashtag so still within hashtag
        if (prev === true) {
            arr.push(str[num])
            //Either within at end of hashtag or within bounds of hashtag
            if (str[num+1] === ' ' | str[num+1 === '#']) {
                str.shift()
                return help(str, num, false,arr)  
            } else {
                str.shift()
                return help(str, num, true,arr)  
            }
        //Not a hashtag and not within a hashtag
        } else {
            str.shift()
            return help(str, num, false,arr)   
        } 
    } 
}

const likeHashCall = (x, arr, hashes, like_count) => {
    return new Promise((res, rej) => {
        window.FB.api(`${x.id}?fields=like_count,caption,id`, function(response) {
            like_count += response.like_count;
            let inv_likes = response.like_count;
            let captionArray = String(response.caption);
            let toMap = Array.from(captionArray)
            hashes = help(toMap, 0, false, arr) 
            if (hashes.length === 0) {
                rej(response)
            }
            hashes.shift()
            let obj = {"id": response.id, "likes": inv_likes, "hashtags": hashes} 
            if (hashes !== 'undefined') {
                // console.log("hashes", hashes)
                res(obj)
            } 
        })   
    })
}

export function dictCreate(photoArray, like_count, dict) {
    return new Promise((resolve, rej) => {
        photoArray.map(async (x, i) => {
            let arr = new Array;
            let hashes;
            return await likeHashCall(x, arr, hashes, like_count)
            .then(res => {
            if (res === 'undefined') {
                rej(x)
            }
            dict.push(res)
            if (dict.length === photoArray.length) {
                console.log('dict create resolved')
                resolve(dict) 
            } 
            })    
        })     
    })
}

export function avLikesDictionary(dict, av_likes, like_count, photoArray) {
    return new Promise((resolve, reject) => {
    av_likes = like_count / photoArray.length;
    let hashNumUses = {}
    dict.map((x, i) => {
    //Creates hashtag score in dict - diff & divided diff
    let diff = x.likes - av_likes;
    x.difference = diff;
    let score = diff / x.hashtags.length
    x.hashtagScore = score
        x.hashtags.map(x => {
            if (!(x in hashNumUses)) {
                hashNumUses = {
                    ...hashNumUses,
                    [x]: 1
                }
            } else {
                hashNumUses[x] += 1
            }
        })
        return dict;
        })
    const newDict = dict;
    const object =  {newDict, hashNumUses}
    resolve(object)
    })
}

export function scoreList(obj) {
    return new Promise((res, rej) => {
        const {hashNumUses, newDict} = obj;
        let scoreList = {}
        newDict.map(x => {
            x.hashtags.map(y => {
                if (!(y in scoreList)) {
                    scoreList = {
                        ...scoreList,
                        [y]: x.hashtagScore
                    }
                } else {
                    let oldScore = scoreList[y];
                    let newScore = oldScore + x.hashtagScore;
                    scoreList[y] = newScore;
                }
            })
        })
        res(scoreList)
    })
}