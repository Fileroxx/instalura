import React from 'react';
import WebsitePageWrapper from '../index';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperProps } = { pageWrapperProps: {} }, ) {
    return(props) => (
        <WebsiteGlobalProvider>
            <WebsitePageWrapper {...pageWrapperProps} {...props.pageWrapperProps} >
                <PageComponent {...props} />
            </WebsitePageWrapper>
        </WebsiteGlobalProvider>
    );
}