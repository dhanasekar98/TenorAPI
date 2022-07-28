import React,{useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useDispatch ,useSelector } from 'react-redux';
import { Row,Col } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import actions from './Reducer/constants';

const SearchContainer = () => {

    // Local State

    const [leftStyle,setLeftStyle] = useState(0);
    const [searchLeftStyle,setSearchLeftStyle] = useState(0);
    const [active,setActive] = useState(false);
    const [text,setText] = useState('');
 
    // Dispatch and Selector in Redux.

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    // State values

    const { Treading, Featured } = state;

    // Dispatch action takes before rendering

    useEffect(() => {
      dispatch({type:actions.TRENDING_API_REQUESTED});
      dispatch({type:actions.FEATURED_API_REQUESTED});
    },[])


    // When we change in the input

    const handleChange = (event) => {
        const{name,value} = event.target;
        setText(value);
    }

    // When we click the search icons
    
    const handleSearchClick = () => {
        dispatch({type:actions.SEARCH_API_REQUESTED,value:text});
        dispatch({type:actions.SEARCH_STICKER_API_REQUESTED,value:text});
        setActive(true);
    }

    // When press the trending tags

    const handleSearchChange = (value) => {
        dispatch({type:actions.SEARCH_API_REQUESTED,value:value});
        dispatch({type:actions.SEARCH_STICKER_API_REQUESTED,value:value});
        setActive(true);
        setText(value);
    }

    // When the enter in search input

    const handleKeyDown = (event) => {
        const {name,value} = event.target;
        if(event.key === 'Enter') {
            dispatch({type:actions.SEARCH_API_REQUESTED,value:value});
            dispatch({type:actions.SEARCH_STICKER_API_REQUESTED,value:value});
            setActive(true);
            setText(value);
        }
    }


    // Trending Tags Container

    const TrendingContainer = () => {
        return(
            <Container>
            <h1 style={{fontWeight:'700'}}>Trending Tenor Searches</h1>
            <div className='Carousel tags'>
                <div className='carousel-container TagList'>
                    <div className='frames-container' style={{left: `-${leftStyle}px`}}>
                        {Treading?.data?.map((value,index) => {
                            return (
                           <div className='TrendsTag' key={index} onClick = {() => handleSearchChange(value.searchterm)}>
                               <div>
                                   <div className='img' style={{ background:`url(${value.image})`}} >

                                   </div>
                                   <div className='info'>
                                       <span className='searchterm'>{value.searchterm}</span>
                                   </div>
                               </div>
                           </div>
                            )
                        })}
                    </div>
                </div>
                <div className='prev-button scroll-button' style={{display: `${leftStyle == 0 ? 'none' : 'block' }`}}>
                        <KeyboardArrowLeftIcon style={{color:'#000'}} onClick={() => setLeftStyle((preState) => preState - 1170)}/>
                            </div>
                        <div className='next-button scroll-button' style={{display: `${leftStyle == 3510 ? 'none' : 'block' }`}} >
                        <ChevronRightIcon style={{color:'#000'}} onClick={() => setLeftStyle((preState) => preState + 1170)}/>
                        </div>
            </div>
        </Container>
        )
    }

    // SearchSticker Container

    const SearchStickerContainer = () => {
        return (
            <Container className='mt-3'>
             <h1 style={{fontWeight:'700'}}>Stickers</h1>
              <div className='Carousel stickers' style={{display:'flex'}}>
                  <div className='StickerList carousel-container'>
                      <div className='frames-container' style={{display:'flex',width:'200px',left:`-${searchLeftStyle}px`,position:'absolute'}}>
                          { Featured?.sticker?.map((data,index) => {
                              return(
                                <figure key={index} className='gif-list-item' style={{width:'158px',height:'153px'}}>
                                <a href={data?.itemurl}>
                                    <div className='gif'>
                                        <img src={data?.media_formats?.gif?.url}  style={{width:'158px',height:'153px'}} alt={data?.content_description} />
                                    </div>
                                    <div className='overlay'></div>
                                </a>
                                <div className='actions'>
                                    <span className='GifFavButton FavButton'></span>
                                </div>
                               </figure>
                              )
                          })}

                      </div>
                  </div>
                  <div className='buttons'>
                  <div className='prev-button scroll-button' onClick={() => setSearchLeftStyle((preState) => preState == 0 ? 0 : preState - 182)} >
                        <KeyboardArrowLeftIcon  style={{color:'#000'}}  />
                            </div>
                        <div className='next-button scroll-button' onClick={() => setSearchLeftStyle((preState) => preState > 2300 ? 2500 : preState + 182)} >
                        <ChevronRightIcon style={{color:'#000'}} />
                        </div>
                  </div>
              </div>
            </Container>
        )
    }
    
    // GIF Container

    const GIFContainer = () => {
        return (
            <Container>
            <h2 style={{fontWeight:'700'}}>{!active ? 'Featured GIFs' : 'GIFs'}</h2>
            <div>
                <div>
                    <div className='gif-list' style={{height: 'auto'}}>
                     <div className='column'>
                         {Featured?.data?.map((data,index) => {
                             return (
                               <figure key={index} className='gif-list-item' >
                               <a href={data?.itemurl}>
                                   <div className='gif'>
                                       <img src={data?.media_formats?.gif?.url}   alt={data?.content_description} />
                                   </div>
                                   <div className='overlay'></div>
                               </a>
                               <div className='actions'>
                                   <span className='GifFavButton FavButton'></span>
                               </div>
                              </figure>
                             )
                         })}
                     </div>
                    </div>
                </div>
            </div>
        </Container>
        )
    }

// Render  

    return(
        <React.Fragment>
         <Row className="search-row">
         <Container>
            <Row>
                <Col md='12' className='search-col'>
                <input type='text' placeholder='Search for GIFs and Stickers' value={text} name='search'onKeyDown={(event) => handleKeyDown(event)} onChange={(event) => handleChange(event)}  className='search-box' />
                <span className='search-icon'>
                  <SearchIcon onClick={() => handleSearchClick()}/>
                </span>  
                </Col>
            </Row>
          </Container>
         </Row>
         <Row>
           { !active ? <TrendingContainer /> : <SearchStickerContainer /> }
         </Row>
         <Row>
            <GIFContainer />
         </Row>      
        </React.Fragment>
    )
}

export default SearchContainer;