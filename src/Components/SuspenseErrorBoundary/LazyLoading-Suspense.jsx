import { Suspense, lazy } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

const ReportPage = lazy(()=> import('./page/ReportPage'));

function App(){
    return (
        <ErrorBoundary>
            <Suspense fallback={<PageSkeleton/>}>
                <ReportPage />
            </Suspense>
        </ErrorBoundary>
    )
}

function PageSkeleton(){
    return <div> Loading..</div>
}