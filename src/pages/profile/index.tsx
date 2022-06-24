import React from "react";
import BaseLayout from "@/components/BaseLayout";

import Css from "@/styles/modules/profile.module.scss";

const Profile: React.FC = () => {
  return (
    <BaseLayout>
      <main className={Css.profile}>
        <section className={Css.group}>123</section>
      </main>
    </BaseLayout>
  );
};

export default Profile;
