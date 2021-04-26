import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {OffersWrapper, AvailableOffer, ProcessWrapper} from './styledComponents';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

export default function BetterResults() {
    return (
        <section>
            <article>
            <OffersWrapper inputImage="https://q3p9g6n2.rocketcdn.me/wp-content/ml-loads/2017/04/people-digital-content-data-ss-1920.jpg">
                <AvailableOffer className='snap-location'>
                <Typography variant='h4'><b>Our Process to Better Marketing, Leads, and Results</b></Typography>
                <ProcessWrapper>
                    <div>
                    <SearchIcon color='inherit' className='process-icon'></SearchIcon>
                    <Typography variant='h5'><b>Discover</b></Typography>
                    <Typography variant='body2' className='processText'>We offer a FREE Audit of your SEM, SEO, SMM initiative(s) and competitor analysis. Then we deliver a detailed customized proposal at NO COST!</Typography>
                    </div>

                    <div>
                    <AddCircleOutlineIcon color='inherit' className='process-icon'></AddCircleOutlineIcon>
                    <Typography variant='h5'><b>Create</b></Typography>
                    <Typography variant='body2' className='processText'>We will create a custom-tailored marketing strategy for your business, which includes: video, photography, infographics, articles, and more.</Typography>
                    </div>
                    
                    <div>
                    <BubbleChartIcon color='inherit' className='process-icon'></BubbleChartIcon>
                    <Typography variant='h5'><b>Evolve</b></Typography>
                    <Typography variant='body2' className='processText'>As technology, market trends, and budgets change, we continue to adapt your marketing strategy, delivering consistent exponential growth.</Typography>
                    </div>
                </ProcessWrapper>
                <br></br>
                <Button variant='outlined' color='primary' size='medium' className='learnMore-process'>Sechdule A Call!</Button>
                </AvailableOffer>
            </OffersWrapper>
            </article>
        </section>
        )
}
