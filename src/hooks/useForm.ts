import { message } from "antd";
import useRootStore from "@/store";
import { FormInstance } from "antd";

interface IConfig {
  form: FormInstance;
  beforeRequest?: <T, U>(values: T) => U; // 请求前的数据处理
  cbAfterSuccess?: any; // 成功后回调
  update?: any; // 更新接口
  add?: any; // 新增接口
  idKey?: string; // 主要用来判断新增还是编辑
}

function useForm(config: IConfig) {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<IFormActionLT>("FormAction");

  const idkey = config.idKey || "id";

  const save = () => {
    config.form
      .validateFields()
      .then((values: any) => {
        const fetch = values[idkey] ? config.update : config.add;

        if (config.beforeRequest) values = config.beforeRequest(values);

        return fetch(values);
      })
      .then((res: any) => {
        if (res.isSuccess) {
          message.success(texts.success);
          config.cbAfterSuccess && config.cbAfterSuccess();
        }
      });
  };

  return { save };
}

export default useForm;
