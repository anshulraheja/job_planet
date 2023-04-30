import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchListingPageData } from '../../../store/listSlice';
import { useAppDispatch, useAppSelector } from '../../../store';
import { IListingData, IRecruitData } from './types';
import CompanyCard from '../CompanyCard';

const ListPage = () => {
  const dispatch = useAppDispatch();
  const listData = useAppSelector<IListingData>(
    (state) => state.list.data
  );
  const loading = useAppSelector((state) => state.list.loading);
  const [page, setPage] = useState(1);
  const [allRecruits, setAllRecruits] = useState<IRecruitData[]>([]);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      dispatch(fetchListingPageData(1));
      mountedRef.current = true;
    }
  }, []);
  useEffect(() => {
    if (page > 1) dispatch(fetchListingPageData(page));
  }, [page]);

  useEffect(() => {
    if (listData?.data?.recruits) {
      setAllRecruits((prevRecruits) => [
        ...prevRecruits,
        ...listData.data.recruits,
      ]);
    }
  }, [listData]);

  const handleScroll = useCallback(() => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !loading && page < 4) {
      setPage(page + 1);
    }
  }, [loading, listData, page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="listing-page">
      <div className="company-card">
        {allRecruits.map((recruit: IRecruitData) => (
          <CompanyCard recruit={recruit} key={recruit?.id} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ListPage;
