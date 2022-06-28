import React from "react";
import { useProfileModel } from "./model";

import BaseLayout from "@/components/BaseLayout";
import GroupList from "./children/goupList";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DefaultLoading from "@/components/DefaultLoading";
import AddModal from "./children/addModal";

import Css from "@/styles/modules/profile.module.scss";

const Profile: React.FC = () => {
  const { show, closeModal, showModal, texts, data, loading, lang,toProject } =
    useProfileModel();

  return (
    <BaseLayout>
      <DefaultLoading loading={loading}>
        <main className={Css.profile}>
          <section className={Css.group}>
            <div className={Css.title}>
              <h2>{texts.groupName}</h2>
              <Button
                type="primary"
                onClick={showModal}
                icon={<PlusOutlined />}
              >
                {texts.addGroup}
              </Button>
            </div>
            <GroupList
              itemClick={toProject}
              isEmpty={!data.length}
              texts={texts}
              list={data}
            />
          </section>
          <AddModal lang={lang} show={show} close={closeModal} texts={texts} />
        </main>
      </DefaultLoading>
    </BaseLayout>
  );
};

export default Profile;
