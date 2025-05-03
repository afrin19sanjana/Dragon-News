import { Suspense } from "react";
import Categories from "../categories/Categories";



const LeftAside = () => {
    return (
        <div className='container mx-auto'>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Categories></Categories>
            </Suspense>
          
        </div>
    );
};

export default LeftAside;