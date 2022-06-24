import React from "react";
import useProfileModel from "./model";

import BaseLayout from "@/components/BaseLayout";
import GroupList from "./children/goupList";

import Css from "@/styles/modules/profile.module.scss";

const Profile: React.FC = () => {
  const { texts, data } = useProfileModel();

  return (
    <BaseLayout>
      <main className={Css.profile}>
        <section className={Css.group}>
          <h2>{texts.groupName}</h2>
          <GroupList list={data} />
        </section>
      </main>
    </BaseLayout>
  );
};

export default Profile;
