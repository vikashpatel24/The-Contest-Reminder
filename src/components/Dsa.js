import React from "react";
import {Link} from "react-router-dom";

export default function Dsa(){
    const dsaApi = [
        {
            'id':0,
            'topic':'Array',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2'
        },
        {
            'id':1,
            'topic':'Binary Search',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0qYbL4TBaEWgb-ljVdhkM7R'
        },
        {
            'id':2,
            'topic':'Binary Search',
            'author':'Aditya Verma',
            'url':'https://www.youtube.com/playlist?list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2'
        },
        {
            'id':3,
            'topic':'Greedy',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ'
        },
        {
            'id':4,
            'topic':'Linked List',
            'author':'CodeChef',
            'url':'https://www.youtube.com/playlist?list=PLQXZIFwMtjowmxofv7zW-6acm2Vi1476w'
        },
        {
            'id':5,
            'topic':'Stack',
            'author':'Aditya Verma',
            'url':'https://www.youtube.com/playlist?list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd'
        },
        {
            'id':6,
            'topic':'Stack/Queue',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0oSO572kQ7KCSvCUh1AdILj'
        },
        {
            'id':7,
            'topic':'Recursion',
            'author':'Aditya Verma',
            'url':'https://www.youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY'
        },
        {
            'id':8,
            'topic':'Recursion',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9'
        },
        {
            'id':9,
            'topic':'Backtracking',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9'
        },
        {
            'id':10,
            'topic':'Heap',
            'author':'Aditya Verma',
            'url':'https://www.youtube.com/playlist?list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9'
        },
        {
            'id':11,
            'topic':'Tree',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk'
        },
        {
            'id':12,
            'topic':'D P (Imp)',
            'author':'Aditya Verma',
            'url':'https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go'
        },
        {
            'id':13,
            'topic':'D P',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY'
        },
        {
            'id':14,
            'topic':'Graph',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ'
        },
        {
            'id':15,
            'topic':'Trie',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp'
        },
        {
            'id':16,
            'topic':'Advanced DSA',
            'author':'Striver',
            'url':'https://www.youtube.com/playlist?list=PLgUwDviBIf0rf5CQf_HFt35_cF04d8dHN'
        },
        {
            'id':17,
            'topic':'Sliding Window',
            'author':'Aditya Verma',
            'url':'https://www.youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj'
        },
        
    ]
    const practiceApi = [
        {
            'id':0,
            'topic':'LeetCode',
            'url':'https://leetcode.com/'
        },
        {
            'id':1,
            'topic':'GeeksForGeeks',
            'url':'https://practice.geeksforgeeks.org/'
        },
        {
            'id':2,
            'topic':'Coding Ninja',
            'url':'https://www.codingninjas.com/codestudio/problems'
        },
        {
            'id':3,
            'topic':'Codechef-I',
            'url':'https://www.codechef.com/certification/data-structures-and-algorithms/prepare'
        },
        {
            'id':4,
            'topic':'Codechef-II',
            'url':'https://www.codechef.com/LEARNDSA'
        },
    ]
    const othersApi = [
        {
            'id':0,
            'topic':'Which Company Hires When?',
            'url':'https://takeuforward.org/interviews/sde-off-campus-placement-calendar-freshers/'
        },
    ]
    console.log(dsaApi[0])
    return (
        <div className="dsa-box">
            <div className="learn-heading">
                <h1>Learn DSA Topic Wise</h1>
            </div>
            <div className="learn-box">
                    {
                        dsaApi.map((currEl) =>{
                            return (
                                <div className="content-box">
                                    <div className="topic">{currEl.topic} </div>
                                    <div className="author">{currEl.author} </div>
                                    <div className="web-link"><a target='_blank' href={currEl.url} className="web-link-a">Visit</a></div>
                                </div>
                            )
                        })
                    }
            </div>
            
            <div className="dsa-sheet-heading">
                <h1>
                DSA Sheets
                </h1>
            </div>
            <div className='middle dsa-sheet'>
                <div className='section-one dsa-sheet-bg'>
                    
                    <span className='spandsa dsa-sheet-flex'><div className='cent cent-dsa'>Striver's DSA Sheet</div><a  className='cont-one dsa-sheet-go' href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target='_blank'>Visit</a></span>
                </div>
                <div className='section-two dsa-sheet-bg'>
                
                <span className='spanpod dsa-sheet-flex'><div className='cent cent-dsa'>Love Babbar DSA Sheet</div><a className="cont-two dsa-sheet-go" target="_blank" href='https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/'>Visit</a></span>
            </div>

            </div>
            <div className="practice-box-heading">
                <h1>
                    Practice Here
                </h1>    
            </div>     
            <div className="practice-box">
                    {
                        practiceApi.map((currEl) =>{
                            return (
                                <div className="content-box">
                                    <div className="topic">{currEl.topic} </div>
                                    <div className="web-link"><a target='_blank' href={currEl.url} className="web-link-a">Visit</a></div>
                                </div>
                            )
                        })
                    }
            </div>
            <div className="practice-box-heading">
                <h1>
                    Others
                </h1>    
            </div>     
            <div className="practice-box">
                    {
                        othersApi.map((currEl) =>{
                            return (
                                <div className="content-box">
                                    <div className="topic">{currEl.topic} </div>
                                    <div className="web-link"><a className="web-link-a">Visit</a></div>
                                </div>
                            )
                        })
                    }
            </div>
    </div>
    )
}