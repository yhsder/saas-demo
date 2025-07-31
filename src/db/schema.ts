import {
    bigint,
    char,
    datetime,
    decimal,
    int,
    mysqlTable,
    primaryKey,
    text,
    tinyint,
    varchar
} from "drizzle-orm/mysql-core"

export const brandNewsContent = mysqlTable("brand_news_content", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}),
        newsTypeId: int("news_type_id"),
        newsSourceId: int("news_source_id"),
        newsName: varchar("news_name", {length: 64}),
        newsImage: varchar("news_image", {length: 200}),
        newsDetail: text("news_detail"),
        onTop: tinyint("on_top").default(0),
        editTime: datetime("edit_time", {mode: 'string'}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "brand_news_content_id"}),
    ]);

export const brandProduct = mysqlTable("brand_product", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}).notNull(),
        brandProductSortId: bigint("brand_product_sort_id", {mode: "number"}).notNull(),
        productName: varchar("product_name", {length: 64}).notNull(),
        productSpecifi: varchar("product_specifi", {length: 64}),
        productPrice: decimal("product_price", {precision: 10, scale: 2}).notNull(),
        productPopular: varchar("product_popular", {length: 64}),
        productScore: varchar("product_score", {length: 64}),
        productPic: varchar("product_pic", {length: 500}),
        productIntroduc: varchar("product_introduc", {length: 500}),
        productCover: varchar("product_cover", {length: 500}),
        hot: tinyint().default(0),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "brand_product_id"}),
    ]);

export const brandProductSort = mysqlTable("brand_product_sort", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}),
        productSortName: varchar("product_sort_name", {length: 100}).notNull(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "brand_product_sort_id"}),
    ]);

export const customerProductNeeds = mysqlTable("customer_product_needs", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        customerName: varchar("customer_name", {length: 64}).notNull(),
        phone: varchar({length: 20}).notNull(),
        address: varchar({length: 64}),
        productNeeds: varchar("product_needs", {length: 10000}).notNull(),
        message: varchar({length: 500}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "customer_product_needs_id"}),
    ]);

export const mainNewsContent = mysqlTable("main_news_content", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        newsTypeId: int("news_type_id"),
        newsSourceId: int("news_source_id"),
        newsName: varchar("news_name", {length: 64}),
        newsImage: varchar("news_image", {length: 200}),
        newsDetail: text("news_detail"),
        onTop: tinyint("on_top").default(0),
        editTime: datetime("edit_time", {mode: 'string'}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "main_news_content_id"}),
    ]);

export const newsType = mysqlTable("news_type", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        typeName: varchar("type_name", {length: 64}),
        typeDict: tinyint("type_dict"),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "news_type_id"}),
    ]);

export const productComment = mysqlTable("product_comment", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        brandProductId: bigint("brand_product_id", {mode: "number"}),
        comment: varchar({length: 300}),
        score: int(),
        publishState: tinyint("publish_state").default(0),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "product_comment_id"}),
    ]);

export const sellingBrand = mysqlTable("selling_brand", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        brandName: varchar("brand_name", {length: 200}).notNull(),
        brandSite: varchar("brand_site", {length: 16}).notNull(),
        brandCompany: varchar("brand_company", {length: 200}).notNull(),
        brandLogo: varchar("brand_logo", {length: 200}),
        obtainLicense: tinyint("obtain_license").default(0),
        licenseTime: datetime("license_time", {mode: 'string'}),
        voteCount: int("vote_count").default(0),
        firstLetter: char("first_letter", {length: 1}).notNull(),
        createTime: datetime("create_time", {mode: 'string'}),
        // Warning: Can't parse bit(1) from database
        // bit(1)Type: bit(1)("hide_brand"),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "selling_brand_id"}),
    ]);

export const sellingBrandInfo = mysqlTable("selling_brand_info", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}).notNull(),
        companyProfile: text("company_profile"),
        companyPhilosophy: text("company_philosophy"),
        companyHonor: text("company_honor"),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "selling_brand_info_id"}),
    ]);

export const siteNewsRepository = mysqlTable("site_news_repository", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}).notNull(),
        newsName: varchar("news_name", {length: 64}),
        newsImage: varchar("news_image", {length: 200}),
        newsDetail: text("news_detail"),
        editTime: datetime("edit_time", {mode: 'string'}),
        createTime: datetime("create_time", {mode: 'string'}),
        newsTypeId: int("news_type_id"),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "site_news_repository_id"}),
    ]);

export const siteUser = mysqlTable("site_user", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        userName: varchar("user_name", {length: 64}).notNull(),
        password: varchar({length: 32}).notNull(),
        realName: varchar("real_name", {length: 32}).notNull(),
        phone: varchar({length: 20}),
        wechatNo: varchar("wechat_no", {length: 20}),
        province: varchar({length: 32}).notNull(),
        city: varchar({length: 32}).notNull(),
        districtCounty: varchar("district_county", {length: 32}),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}).notNull(),
        address: varchar({length: 64}),
        knowChannel: varchar("know_channel", {length: 32}),
        levelId: bigint("level_id", {mode: "number"}),
        vipStartTime: datetime("vip_start_time", {mode: 'string'}),
        vipEndTime: datetime("vip_end_time", {mode: 'string'}),
        wechatCodeUrl: varchar("wechat_code_url", {length: 200}),
        titleLarge: varchar("title_large", {length: 200}),
        titleSmall: varchar("title_small", {length: 200}),
        siteKeyword: varchar("site_keyword", {length: 200}),
        siteIntroduce: varchar("site_introduce", {length: 500}),
        userPhotoUrl: varchar("user_photo_url", {length: 200}),
        idCardUrl: varchar("id_card_url", {length: 200}),
        idCardName: varchar("id_card_name", {length: 32}),
        idCardNo: varchar("id_card_no", {length: 32}),
        popularity: int().default(0),
        registerFrom: varchar("register_from", {length: 200}),
        createTime: datetime("create_time", {mode: 'string'}),
        webState: tinyint("web_state").default(0).notNull(),
        remark: varchar({length: 500}),
        // Warning: Can't parse bit(1) from database
        // bit(1)Type: bit(1)("show_person_wxcode"),
        // Warning: Can't parse bit(1) from database
        // bit(1)Type: bit(1)("show_person_phone"),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "site_user_id"}),
    ]);

export const siteUserBanner = mysqlTable("site_user_banner", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        bannerUrl: varchar("banner_url", {length: 200}),
        hiddenState: tinyint("hidden_state").default(0),
        seq: int(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "site_user_banner_id"}),
    ]);

export const siteUserConfig = mysqlTable("site_user_config", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        joinTime: varchar("join_time", {length: 32}),
        belongsTeam: varchar("belongs_team", {length: 32}),
        belongsTeamLevel: varchar("belongs_team_level", {length: 32}),
        myGoals: varchar("my_goals", {length: 32}),
        myStory: text("my_story"),
        myColorStyle: varchar("my_color_style", {length: 32}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "site_user_config_id"}),
    ]);

export const siteUserProfile = mysqlTable("site_user_profile", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        profileTitle: varchar("profile_title", {length: 200}),
        profileContent: varchar("profile_content", {length: 10000}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "site_user_profile_id"}),
    ]);

export const siteVipLevel = mysqlTable("site_vip_level", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        levelName: varchar("level_name", {length: 100}).notNull(),
        levelPrice: decimal("level_price", {precision: 10, scale: 2}).notNull(),
        levelValidity: int("level_validity").notNull(),
        levelCreditGive: int("level_credit_give").notNull(),
        recommendBusiness: int("recommend_business").default(0),
        recommendBrandElite: int("recommend_brand_elite").default(0),
        recommendMainElite: tinyint("recommend_main_elite").default(0),
        displayInAnyRegion: tinyint("display_in_any_region").default(0),
        uploadNewsEditCount: int("upload_news_edit_count").default(0),
        uploadImageCount: int("upload_image_count").default(0),
        personalInterview: tinyint("personal_interview").default(0),
        recommendCustomerDemand: tinyint("recommend_customer_demand").default(0),
        siteSubmit: tinyint("site_submit").default(0),
        brandReplace: varchar("brand_replace", {length: 256}),
        keyWordCount: int("key_word_count").default(0),
        keyWordRecommendTime: int("key_word_recommend_time").default(0),
        seoOptimization: tinyint("seo_optimization").default(0),
        promoteCustom: tinyint("promote_custom").default(0),
        levelImage: varchar("level_image", {length: 256}),
        seq: tinyint(),
        createTime: datetime("create_time", {mode: 'string'}),
        // Warning: Can't parse bit(1) from database
        // bit(1)Type: bit(1)("top_level"),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "site_vip_level_id"}),
    ]);

export const sysFile = mysqlTable("sys_file", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        fileName: varchar("file_name", {length: 100}).notNull(),
        fileUrl: varchar("file_url", {length: 100}).notNull(),
        isDelete: tinyint("is_delete").default(0),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "sys_file_id"}),
    ]);

export const sysPermission = mysqlTable("sys_permission", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        perName: varchar("per_name", {length: 128}).notNull(),
        perCode: varchar("per_code", {length: 128}).notNull(),
        parentid: bigint({mode: "number"}),
        available: tinyint().default(1).notNull(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "sys_permission_id"}),
    ]);

export const sysRole = mysqlTable("sys_role", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        roleCode: varchar("role_code", {length: 128}).notNull(),
        roleName: varchar("role_name", {length: 128}).notNull(),
        roleDesc: varchar("role_desc", {length: 128}).notNull(),
        available: tinyint().default(1).notNull(),
        seq: tinyint(),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "sys_role_id"}),
    ]);

export const sysRolePermission = mysqlTable("sys_role_permission", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sysRoleId: bigint("sys_role_id", {mode: "number"}).notNull(),
        sysPermissionId: bigint("sys_permission_id", {mode: "number"}).notNull(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "sys_role_permission_id"}),
    ]);

export const sysUser = mysqlTable("sys_user", {
        id: bigint({mode: "number"}).notNull(),
        userCode: varchar("user_code", {length: 32}).notNull(),
        userName: varchar("user_name", {length: 64}).notNull(),
        password: varchar({length: 32}).notNull(),
        locked: tinyint().default(0).notNull(),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "sys_user_id"}),
    ]);

export const sysUserRole = mysqlTable("sys_user_role", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sysUserId: bigint("sys_user_id", {mode: "number"}).notNull(),
        sysRoleId: bigint("sys_role_id", {mode: "number"}).notNull(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "sys_user_role_id"}),
    ]);

export const tbArea = mysqlTable("tb_area", {
        id: int().notNull(),
        pid: int(),
        deep: varchar({length: 255}),
        name: varchar({length: 255}),
        pinyinPrefix: varchar("pinyin_prefix", {length: 255}),
        pinyin: varchar({length: 255}),
        extId: varchar("ext_id", {length: 255}),
        extName: varchar("ext_name", {length: 255}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_area_id"}),
    ]);

export const tbBrandBanner = mysqlTable("tb_brand_banner", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}).notNull(),
        bannerUrl: varchar("banner_url", {length: 500}),
        hiddenState: tinyint("hidden_state").default(0),
        seq: int(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_brand_banner_id"}),
    ]);

export const tbBrandDemand = mysqlTable("tb_brand_demand", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        sellingBrandId: bigint("selling_brand_id", {mode: "number"}).notNull(),
        customerName: varchar("customer_name", {length: 64}),
        phone: varchar({length: 20}),
        wechatNo: varchar("wechat_no", {length: 32}),
        province: varchar({length: 32}),
        city: varchar({length: 32}),
        publishState: tinyint("publish_state").default(0),
        message: varchar({length: 500}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_brand_demand_id"}),
    ]);

export const tbBrandDemandReply = mysqlTable("tb_brand_demand_reply", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        brandDemandId: bigint("brand_demand_id", {mode: "number"}),
        replyUserId: bigint("reply_user_id", {mode: "number"}),
        replyMsg: varchar("reply_msg", {length: 2000}),
        replyState: tinyint("reply_state").default(0),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_brand_demand_reply_id"}),
    ]);

export const tbCredit = mysqlTable("tb_credit", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        creditCount: int("credit_count").default(0),
        creditSourceId: tinyint("credit_source_id"),
        creditSourceName: varchar("credit_source_name", {length: 64}),
        relatedFlag: varchar("related_flag", {length: 200}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_credit_id"}),
    ]);

export const tbCustomerMessage = mysqlTable("tb_customer_message", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        customerName: varchar("customer_name", {length: 64}),
        phone: varchar({length: 20}),
        email: varchar({length: 32}),
        typeMsg: tinyint("type_msg"),
        publishState: tinyint("publish_state").default(0),
        message: varchar({length: 500}),
        replyMsg: varchar("reply_msg", {length: 500}),
        createTime: datetime("create_time", {mode: 'string'}),
        replyTime: datetime("reply_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_customer_message_id"}),
    ]);

export const tbJoinCause = mysqlTable("tb_join_cause", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        joinName: varchar("join_name", {length: 64}),
        phone: varchar({length: 20}),
        province: varchar({length: 32}).notNull(),
        city: varchar({length: 32}).notNull(),
        followup: tinyint().default(0),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_join_cause_id"}),
    ]);

export const tbJoinInformation = mysqlTable("tb_join_information", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        investmentNum: varchar("investment_num", {length: 64}),
        teamNum: varchar("team_num", {length: 64}),
        areaRequire: varchar("area_require", {length: 64}),
        sellingNo: varchar("selling_no", {length: 64}),
        teamName: varchar("team_name", {length: 64}),
        investmentMoney: varchar("investment_money", {length: 64}),
        currentLevel: varchar("current_level", {length: 64}),
        jobRequire: varchar("job_require", {length: 64}),
        salary: varchar({length: 64}),
        ageRequire: varchar("age_require", {length: 64}),
        teamRofile: varchar("team_rofile", {length: 200}),
        websiteAddress: varchar("website_address", {length: 200}),
        productAdvantage: varchar("product_advantage", {length: 200}),
        enterpriseAdvantage: varchar("enterprise_advantage", {length: 200}),
        institutionalAdvantage: varchar("institutional_advantage", {length: 200}),
        systemAdvantage: varchar("system_advantage", {length: 200}),
        joinProcess: varchar("join_process", {length: 500}),
        investmentContent: text("investment_content"),
        createTime: datetime("create_time", {mode: 'string'}),
        updateTime: datetime("update_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_join_information_id"}),
    ]);

export const tbMainBanner = mysqlTable("tb_main_banner", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        bannerUrl: varchar("banner_url", {length: 500}),
        hiddenState: tinyint("hidden_state").default(0),
        seq: int(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_main_banner_id"}),
    ]);

export const tbProductAnswer = mysqlTable("tb_product_answer", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        customerName: varchar("customer_name", {length: 64}),
        phone: varchar({length: 20}),
        email: varchar({length: 32}),
        typeMsg: tinyint("type_msg"),
        publishState: tinyint("publish_state").default(0),
        message: varchar({length: 500}),
        replyMsg: varchar("reply_msg", {length: 500}),
        createTime: datetime("create_time", {mode: 'string'}),
        replyTime: datetime("reply_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_product_answer_id"}),
    ]);

export const tbSiteAlbum = mysqlTable("tb_site_album", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        picName: varchar("pic_name", {length: 64}),
        picUrl: varchar("pic_url", {length: 200}),
        albumType: tinyint("album_type"),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "tb_site_album_id"}),
    ]);

export const userContract = mysqlTable("user_contract", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        contractNo: varchar("contract_no", {length: 64}),
        levelId: bigint("level_id", {mode: "number"}),
        levelName: varchar("level_name", {length: 100}).notNull(),
        levelPrice: decimal("level_price", {precision: 10, scale: 2}),
        contractName: varchar("contract_name", {length: 64}),
        contractPath: varchar("contract_path", {length: 200}),
        contractState: tinyint("contract_state").default(0),
        contractType: tinyint("contract_type").notNull(),
        contractStartTime: datetime("contract_start_time", {mode: 'string'}),
        contractEndTime: datetime("contract_end_time", {mode: 'string'}),
        createTime: datetime("create_time", {mode: 'string'}),
        prepayDeposit: decimal("prepay_deposit", {precision: 10, scale: 2}),
        signName: varchar("sign_name", {length: 32}),
        signIdCard: varchar("sign_id_card", {length: 32}),
        signPhone: varchar("sign_phone", {length: 20}),
        signImage: varchar("sign_image", {length: 200}),
        signTime: datetime("sign_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "user_contract_id"}),
    ]);

export const userNewsContent = mysqlTable("user_news_content", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        newsTypeId: int("news_type_id"),
        newsSourceId: int("news_source_id"),
        newsName: varchar("news_name", {length: 64}),
        newsImage: varchar("news_image", {length: 200}),
        newsDetail: text("news_detail"),
        publishState: tinyint("publish_state").default(0),
        onTop: tinyint("on_top").default(0),
        editTime: datetime("edit_time", {mode: 'string'}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "user_news_content_id"}),
    ]);

export const userProductConfig = mysqlTable("user_product_config", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        brandProductId: bigint("brand_product_id", {mode: "number"}).notNull(),
        hideSort: tinyint("hide_sort").default(0),
        seq: int().default(0),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "user_product_config_id"}),
    ]);

export const userProductSortConfig = mysqlTable("user_product_sort_config", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        brandProductSortId: bigint("brand_product_sort_id", {mode: "number"}).notNull(),
        hideSort: tinyint("hide_sort").default(0),
        seq: int().default(0),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "user_product_sort_config_id"}),
    ]);

export const userShareContent = mysqlTable("user_share_content", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        shareTypeId: int("share_type_id"),
        newsSourceId: int("news_source_id"),
        shareName: varchar("share_name", {length: 64}),
        shareImage: varchar("share_image", {length: 200}),
        dealAmount: decimal("deal_amount", {precision: 10, scale: 2}),
        increasePerson: int("increase_person"),
        shareDetail: text("share_detail"),
        publishState: tinyint("publish_state").default(0),
        onTop: tinyint("on_top").default(0),
        editTime: datetime("edit_time", {mode: 'string'}),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "user_share_content_id"}),
    ]);

export const userVipConfig = mysqlTable("user_vip_config", {
        id: bigint({mode: "number"}).autoincrement().notNull(),
        siteUserId: bigint("site_user_id", {mode: "number"}).notNull(),
        levelId: bigint("level_id", {mode: "number"}).notNull(),
        vipStartTime: datetime("vip_start_time", {mode: 'string'}).notNull(),
        vipEndTime: datetime("vip_end_time", {mode: 'string'}).notNull(),
        personalInterview: tinyint("personal_interview").default(0).notNull(),
        recommendBusinessStartTime: datetime("recommend_business_start_time", {mode: 'string'}).notNull(),
        recommendBusinessEndTime: datetime("recommend_business_end_time", {mode: 'string'}).notNull(),
        recommendBrandStartTime: datetime("recommend_brand_start_time", {mode: 'string'}).notNull(),
        recommendBrandEndTime: datetime("recommend_brand_end_time", {mode: 'string'}).notNull(),
        uploadNewsEditCount: int("upload_news_edit_count").default(0).notNull(),
        uploadImageCount: int("upload_image_count").default(0).notNull(),
        brandReplaceCount: int("brand_replace_count").default(0).notNull(),
        createTime: datetime("create_time", {mode: 'string'}),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "user_vip_config_id"}),
    ]);
