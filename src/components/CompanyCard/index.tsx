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
    <div className="card-container">
      <div className="bookmark">
        <img
          src={recruit?.bookmark ? BookmarkOn : BookmarkOff}
          alt="bookmark"
        />
      </div>
      <div className="image-container">
        <img src={recruit?.image} alt={recruit?.title} />
      </div>
      <div className="card-content">
        <div className="title">{recruit?.title}</div>
        <div className="sub-title">
          {recruit?.occupation_names?.level1 +
            ', ' +
            recruit?.occupation_names?.level2}
        </div>

        <div className="line"></div>
        <div className="company-info">
          <div className="company-logo">
            <img src={recruit?.company?.logo} alt="" />
          </div>
          <div className="company-name">{recruit?.company?.name}</div>
          <div className="grade-container">
            <div>
              <img src={StarIcon} alt="star" />
            </div>
            <div className="grade">{recruit?.company?.grade}</div>
          </div>
          <div className="grade-count">
            ({recruit?.company?.grade_count})
          </div>
        </div>
        <div className="appeal">{recruit?.appeal}</div>
        <div className="line"></div>
        <div>
          <div className="reward-review">
            {recruit?.review}: {recruit?.reward}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyCard;
