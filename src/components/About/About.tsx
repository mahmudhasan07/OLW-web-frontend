"use client";
import {
    useGetTermsAndPrivacyQuery,
} from "@/Redux/Api/termsAndPrivacyApi";
import React, { useEffect, useState } from "react";
import TiptapEditor from "../Shared/TiptapEditor";

const About = () => {
    const { data: termsData, isLoading } =
        useGetTermsAndPrivacyQuery("ABOUT_US");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (termsData?.data?.content) {
            setContent(termsData.data.content);
        }
    }, [termsData]);

    return (
        <div className=" min-h-screen container text-white p-4 sm:p-6 md:p-10 font-sans">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold gradient-text">About Us</h1>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        Manage And Monitor Everything In One Place.
                    </p>
                </div>
            </div>

            <div className="rounded-2xl lg:p-0 p-2">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-[#00A3FF]"></div>
                    </div>
                ) : (
                    <div className="">
                        <TiptapEditor value={content} editable={false} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
