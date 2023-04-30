import React from 'react';
import { IRecruitData } from '../ListingPage/types';
import { BookmarkOff, BookmarkOn, StarIcon } from '../../assets';

interface IPropsCompanyCard {
  recruit: IRecruitData;
}
const CompanyCard: React.FC<IPropsCompanyCard> = (
  props: IPropsCompanyCard
) => {
  const { recruit } = props;
  return (
    <div className="relative w-72 rounded-lg border border-gray-300 bg-white shadow-md">
      <div className="bookmark absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-gray-700 opacity-40">
        <img
          src={recruit?.bookmark ? BookmarkOn : BookmarkOff}
          alt="bookmark"
        />
      </div>
      <div className="h-48 ">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={recruit?.image}
          alt={recruit?.title}
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="text-lg font-bold text-gray-700">
          {recruit?.title}
        </div>
        <div className="text-sm font-normal text-gray-500 ">
          {recruit?.occupation_names?.level1 +
            ', ' +
            recruit?.occupation_names?.level2}
        </div>

        <div className="border border-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md border border-gray-300">
            <img
              className="h-full w-full object-cover"
              src={recruit?.company?.logo}
              alt=""
            />
          </div>
          <div className="text-sm font-bold text-gray-700">
            {recruit?.company?.name}
          </div>
          <div className=" flex items-center">
            <div>
              <img src={StarIcon} alt="star" />
            </div>
            <div className="text-sm font-bold text-gray-700">
              {recruit?.company?.grade}
            </div>
          </div>
          <div className="text-sm font-normal text-gray-500">
            ({recruit?.company?.grade_count})
          </div>
        </div>
        <div className="text-sm font-normal text-gray-500">
          {recruit?.appeal}
        </div>
        <div className="border border-gray-300"></div>
        <div>
          <div className="text-sm font-bold text-gray-700">
            {recruit?.review}: {recruit?.reward}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyCard;
