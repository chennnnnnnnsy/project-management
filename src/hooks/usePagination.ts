import { useState, useMemo, useRef } from "react";

type Params = {
  current: number;
  pageSize: number;
  [s: string]: any;
};

type TService<
  TData extends IResponseSuccessData<IPage<any>>,
  TParams extends Params
> = (p: TParams) => Promise<TData>;

const usePagination = <
  T extends IResponseSuccessData<IPage<any>>,
  U extends Params
>(
  service: TService<T, U>
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [otherP, setOtherP] = useState<IObject>({});

  const fetch = () => {
    setLoading(true);

    const p: any = { current, pageSize, ...otherP };
    service(p)
      .then((res) => {
        if (res.isSuccess) {
          setData(res.result.content);
          setTotal(res.result.total);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChange = (current: number, pageSize: number) => {
    setCurrent(current);
    fetch();
  };

  const run = (p: IPaginationParams, other?: IObject) => {
    setCurrent(p.current);
    setPageSize(p.pageSize);
    if (other && Object.keys(other).length) setOtherP(other);
    fetch();
  };

  return {
    loading,
    data,
    run,
    pagination: { total, current, pageSize, onChange },
  };
};

export default usePagination;
