import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Auth
 *
 */
export type AuthModel = runtime.Types.Result.DefaultSelection<Prisma.$AuthPayload>;
export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null;
    _avg: AuthAvgAggregateOutputType | null;
    _sum: AuthSumAggregateOutputType | null;
    _min: AuthMinAggregateOutputType | null;
    _max: AuthMaxAggregateOutputType | null;
};
export type AuthAvgAggregateOutputType = {
    id: number | null;
    requestId: number | null;
};
export type AuthSumAggregateOutputType = {
    id: number | null;
    requestId: number | null;
};
export type AuthMinAggregateOutputType = {
    id: number | null;
    type: $Enums.AuthType | null;
    token: string | null;
    username: string | null;
    password: string | null;
    key: string | null;
    value: string | null;
    addTo: string | null;
    requestId: number | null;
};
export type AuthMaxAggregateOutputType = {
    id: number | null;
    type: $Enums.AuthType | null;
    token: string | null;
    username: string | null;
    password: string | null;
    key: string | null;
    value: string | null;
    addTo: string | null;
    requestId: number | null;
};
export type AuthCountAggregateOutputType = {
    id: number;
    type: number;
    token: number;
    username: number;
    password: number;
    key: number;
    value: number;
    addTo: number;
    requestId: number;
    _all: number;
};
export type AuthAvgAggregateInputType = {
    id?: true;
    requestId?: true;
};
export type AuthSumAggregateInputType = {
    id?: true;
    requestId?: true;
};
export type AuthMinAggregateInputType = {
    id?: true;
    type?: true;
    token?: true;
    username?: true;
    password?: true;
    key?: true;
    value?: true;
    addTo?: true;
    requestId?: true;
};
export type AuthMaxAggregateInputType = {
    id?: true;
    type?: true;
    token?: true;
    username?: true;
    password?: true;
    key?: true;
    value?: true;
    addTo?: true;
    requestId?: true;
};
export type AuthCountAggregateInputType = {
    id?: true;
    type?: true;
    token?: true;
    username?: true;
    password?: true;
    key?: true;
    value?: true;
    addTo?: true;
    requestId?: true;
    _all?: true;
};
export type AuthAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: Prisma.AuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auths to fetch.
     */
    orderBy?: Prisma.AuthOrderByWithRelationInput | Prisma.AuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AuthAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AuthSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType;
};
export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
    [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuth[P]> : Prisma.GetScalarType<T[P], AggregateAuth[P]>;
};
export type AuthGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthWhereInput;
    orderBy?: Prisma.AuthOrderByWithAggregationInput | Prisma.AuthOrderByWithAggregationInput[];
    by: Prisma.AuthScalarFieldEnum[] | Prisma.AuthScalarFieldEnum;
    having?: Prisma.AuthScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthCountAggregateInputType | true;
    _avg?: AuthAvgAggregateInputType;
    _sum?: AuthSumAggregateInputType;
    _min?: AuthMinAggregateInputType;
    _max?: AuthMaxAggregateInputType;
};
export type AuthGroupByOutputType = {
    id: number;
    type: $Enums.AuthType;
    token: string | null;
    username: string | null;
    password: string | null;
    key: string | null;
    value: string | null;
    addTo: string | null;
    requestId: number;
    _count: AuthCountAggregateOutputType | null;
    _avg: AuthAvgAggregateOutputType | null;
    _sum: AuthSumAggregateOutputType | null;
    _min: AuthMinAggregateOutputType | null;
    _max: AuthMaxAggregateOutputType | null;
};
type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuthGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuthGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuthGroupByOutputType[P]>;
}>>;
export type AuthWhereInput = {
    AND?: Prisma.AuthWhereInput | Prisma.AuthWhereInput[];
    OR?: Prisma.AuthWhereInput[];
    NOT?: Prisma.AuthWhereInput | Prisma.AuthWhereInput[];
    id?: Prisma.IntFilter<"Auth"> | number;
    type?: Prisma.EnumAuthTypeFilter<"Auth"> | $Enums.AuthType;
    token?: Prisma.StringNullableFilter<"Auth"> | string | null;
    username?: Prisma.StringNullableFilter<"Auth"> | string | null;
    password?: Prisma.StringNullableFilter<"Auth"> | string | null;
    key?: Prisma.StringNullableFilter<"Auth"> | string | null;
    value?: Prisma.StringNullableFilter<"Auth"> | string | null;
    addTo?: Prisma.StringNullableFilter<"Auth"> | string | null;
    requestId?: Prisma.IntFilter<"Auth"> | number;
    request?: Prisma.XOR<Prisma.RequestsScalarRelationFilter, Prisma.RequestsWhereInput>;
};
export type AuthOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    token?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    key?: Prisma.SortOrderInput | Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    addTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    request?: Prisma.RequestsOrderByWithRelationInput;
};
export type AuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    requestId?: number;
    AND?: Prisma.AuthWhereInput | Prisma.AuthWhereInput[];
    OR?: Prisma.AuthWhereInput[];
    NOT?: Prisma.AuthWhereInput | Prisma.AuthWhereInput[];
    type?: Prisma.EnumAuthTypeFilter<"Auth"> | $Enums.AuthType;
    token?: Prisma.StringNullableFilter<"Auth"> | string | null;
    username?: Prisma.StringNullableFilter<"Auth"> | string | null;
    password?: Prisma.StringNullableFilter<"Auth"> | string | null;
    key?: Prisma.StringNullableFilter<"Auth"> | string | null;
    value?: Prisma.StringNullableFilter<"Auth"> | string | null;
    addTo?: Prisma.StringNullableFilter<"Auth"> | string | null;
    request?: Prisma.XOR<Prisma.RequestsScalarRelationFilter, Prisma.RequestsWhereInput>;
}, "id" | "requestId">;
export type AuthOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    token?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    key?: Prisma.SortOrderInput | Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    addTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    _count?: Prisma.AuthCountOrderByAggregateInput;
    _avg?: Prisma.AuthAvgOrderByAggregateInput;
    _max?: Prisma.AuthMaxOrderByAggregateInput;
    _min?: Prisma.AuthMinOrderByAggregateInput;
    _sum?: Prisma.AuthSumOrderByAggregateInput;
};
export type AuthScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuthScalarWhereWithAggregatesInput | Prisma.AuthScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuthScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuthScalarWhereWithAggregatesInput | Prisma.AuthScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Auth"> | number;
    type?: Prisma.EnumAuthTypeWithAggregatesFilter<"Auth"> | $Enums.AuthType;
    token?: Prisma.StringNullableWithAggregatesFilter<"Auth"> | string | null;
    username?: Prisma.StringNullableWithAggregatesFilter<"Auth"> | string | null;
    password?: Prisma.StringNullableWithAggregatesFilter<"Auth"> | string | null;
    key?: Prisma.StringNullableWithAggregatesFilter<"Auth"> | string | null;
    value?: Prisma.StringNullableWithAggregatesFilter<"Auth"> | string | null;
    addTo?: Prisma.StringNullableWithAggregatesFilter<"Auth"> | string | null;
    requestId?: Prisma.IntWithAggregatesFilter<"Auth"> | number;
};
export type AuthCreateInput = {
    type: $Enums.AuthType;
    token?: string | null;
    username?: string | null;
    password?: string | null;
    key?: string | null;
    value?: string | null;
    addTo?: string | null;
    request: Prisma.RequestsCreateNestedOneWithoutAuthInput;
};
export type AuthUncheckedCreateInput = {
    id?: number;
    type: $Enums.AuthType;
    token?: string | null;
    username?: string | null;
    password?: string | null;
    key?: string | null;
    value?: string | null;
    addTo?: string | null;
    requestId: number;
};
export type AuthUpdateInput = {
    type?: Prisma.EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    request?: Prisma.RequestsUpdateOneRequiredWithoutAuthNestedInput;
};
export type AuthUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuthCreateManyInput = {
    id?: number;
    type: $Enums.AuthType;
    token?: string | null;
    username?: string | null;
    password?: string | null;
    key?: string | null;
    value?: string | null;
    addTo?: string | null;
    requestId: number;
};
export type AuthUpdateManyMutationInput = {
    type?: Prisma.EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuthUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuthNullableScalarRelationFilter = {
    is?: Prisma.AuthWhereInput | null;
    isNot?: Prisma.AuthWhereInput | null;
};
export type AuthCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    addTo?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type AuthAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type AuthMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    addTo?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type AuthMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    addTo?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type AuthSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
};
export type AuthCreateNestedOneWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.AuthCreateWithoutRequestInput, Prisma.AuthUncheckedCreateWithoutRequestInput>;
    connectOrCreate?: Prisma.AuthCreateOrConnectWithoutRequestInput;
    connect?: Prisma.AuthWhereUniqueInput;
};
export type AuthUncheckedCreateNestedOneWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.AuthCreateWithoutRequestInput, Prisma.AuthUncheckedCreateWithoutRequestInput>;
    connectOrCreate?: Prisma.AuthCreateOrConnectWithoutRequestInput;
    connect?: Prisma.AuthWhereUniqueInput;
};
export type AuthUpdateOneWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.AuthCreateWithoutRequestInput, Prisma.AuthUncheckedCreateWithoutRequestInput>;
    connectOrCreate?: Prisma.AuthCreateOrConnectWithoutRequestInput;
    upsert?: Prisma.AuthUpsertWithoutRequestInput;
    disconnect?: Prisma.AuthWhereInput | boolean;
    delete?: Prisma.AuthWhereInput | boolean;
    connect?: Prisma.AuthWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUpdateToOneWithWhereWithoutRequestInput, Prisma.AuthUpdateWithoutRequestInput>, Prisma.AuthUncheckedUpdateWithoutRequestInput>;
};
export type AuthUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.AuthCreateWithoutRequestInput, Prisma.AuthUncheckedCreateWithoutRequestInput>;
    connectOrCreate?: Prisma.AuthCreateOrConnectWithoutRequestInput;
    upsert?: Prisma.AuthUpsertWithoutRequestInput;
    disconnect?: Prisma.AuthWhereInput | boolean;
    delete?: Prisma.AuthWhereInput | boolean;
    connect?: Prisma.AuthWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUpdateToOneWithWhereWithoutRequestInput, Prisma.AuthUpdateWithoutRequestInput>, Prisma.AuthUncheckedUpdateWithoutRequestInput>;
};
export type AuthCreateWithoutRequestInput = {
    type: $Enums.AuthType;
    token?: string | null;
    username?: string | null;
    password?: string | null;
    key?: string | null;
    value?: string | null;
    addTo?: string | null;
};
export type AuthUncheckedCreateWithoutRequestInput = {
    id?: number;
    type: $Enums.AuthType;
    token?: string | null;
    username?: string | null;
    password?: string | null;
    key?: string | null;
    value?: string | null;
    addTo?: string | null;
};
export type AuthCreateOrConnectWithoutRequestInput = {
    where: Prisma.AuthWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthCreateWithoutRequestInput, Prisma.AuthUncheckedCreateWithoutRequestInput>;
};
export type AuthUpsertWithoutRequestInput = {
    update: Prisma.XOR<Prisma.AuthUpdateWithoutRequestInput, Prisma.AuthUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.AuthCreateWithoutRequestInput, Prisma.AuthUncheckedCreateWithoutRequestInput>;
    where?: Prisma.AuthWhereInput;
};
export type AuthUpdateToOneWithWhereWithoutRequestInput = {
    where?: Prisma.AuthWhereInput;
    data: Prisma.XOR<Prisma.AuthUpdateWithoutRequestInput, Prisma.AuthUncheckedUpdateWithoutRequestInput>;
};
export type AuthUpdateWithoutRequestInput = {
    type?: Prisma.EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuthUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuthSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    token?: boolean;
    username?: boolean;
    password?: boolean;
    key?: boolean;
    value?: boolean;
    addTo?: boolean;
    requestId?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth"]>;
export type AuthSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    token?: boolean;
    username?: boolean;
    password?: boolean;
    key?: boolean;
    value?: boolean;
    addTo?: boolean;
    requestId?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth"]>;
export type AuthSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    token?: boolean;
    username?: boolean;
    password?: boolean;
    key?: boolean;
    value?: boolean;
    addTo?: boolean;
    requestId?: boolean;
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth"]>;
export type AuthSelectScalar = {
    id?: boolean;
    type?: boolean;
    token?: boolean;
    username?: boolean;
    password?: boolean;
    key?: boolean;
    value?: boolean;
    addTo?: boolean;
    requestId?: boolean;
};
export type AuthOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "token" | "username" | "password" | "key" | "value" | "addTo" | "requestId", ExtArgs["result"]["auth"]>;
export type AuthInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type AuthIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type AuthIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.RequestsDefaultArgs<ExtArgs>;
};
export type $AuthPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Auth";
    objects: {
        request: Prisma.$RequestsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        type: $Enums.AuthType;
        token: string | null;
        username: string | null;
        password: string | null;
        key: string | null;
        value: string | null;
        addTo: string | null;
        requestId: number;
    }, ExtArgs["result"]["auth"]>;
    composites: {};
};
export type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuthPayload, S>;
export type AuthCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthCountAggregateInputType | true;
};
export interface AuthDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Auth'];
        meta: {
            name: 'Auth';
        };
    };
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: Prisma.SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: Prisma.SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     *
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuthFindManyArgs>(args?: Prisma.SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     *
     */
    create<T extends AuthCreateArgs>(args: Prisma.SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthCreateManyArgs>(args?: Prisma.SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     *
     */
    delete<T extends AuthDeleteArgs>(args: Prisma.SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthUpdateArgs>(args: Prisma.SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthUpdateManyArgs>(args: Prisma.SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: Prisma.SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma.Prisma__AuthClient<runtime.Types.Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(args?: Prisma.Subset<T, AuthCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuthCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAggregateArgs>(args: Prisma.Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>;
    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AuthGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuthGroupByArgs['orderBy'];
    } : {
        orderBy?: AuthGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Auth model
     */
    readonly fields: AuthFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Auth.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AuthClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.RequestsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequestsDefaultArgs<ExtArgs>>): Prisma.Prisma__RequestsClient<runtime.Types.Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Auth model
 */
export interface AuthFieldRefs {
    readonly id: Prisma.FieldRef<"Auth", 'Int'>;
    readonly type: Prisma.FieldRef<"Auth", 'AuthType'>;
    readonly token: Prisma.FieldRef<"Auth", 'String'>;
    readonly username: Prisma.FieldRef<"Auth", 'String'>;
    readonly password: Prisma.FieldRef<"Auth", 'String'>;
    readonly key: Prisma.FieldRef<"Auth", 'String'>;
    readonly value: Prisma.FieldRef<"Auth", 'String'>;
    readonly addTo: Prisma.FieldRef<"Auth", 'String'>;
    readonly requestId: Prisma.FieldRef<"Auth", 'Int'>;
}
/**
 * Auth findUnique
 */
export type AuthFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * Filter, which Auth to fetch.
     */
    where: Prisma.AuthWhereUniqueInput;
};
/**
 * Auth findUniqueOrThrow
 */
export type AuthFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * Filter, which Auth to fetch.
     */
    where: Prisma.AuthWhereUniqueInput;
};
/**
 * Auth findFirst
 */
export type AuthFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * Filter, which Auth to fetch.
     */
    where?: Prisma.AuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auths to fetch.
     */
    orderBy?: Prisma.AuthOrderByWithRelationInput | Prisma.AuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Auths.
     */
    cursor?: Prisma.AuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Auths.
     */
    distinct?: Prisma.AuthScalarFieldEnum | Prisma.AuthScalarFieldEnum[];
};
/**
 * Auth findFirstOrThrow
 */
export type AuthFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * Filter, which Auth to fetch.
     */
    where?: Prisma.AuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auths to fetch.
     */
    orderBy?: Prisma.AuthOrderByWithRelationInput | Prisma.AuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Auths.
     */
    cursor?: Prisma.AuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Auths.
     */
    distinct?: Prisma.AuthScalarFieldEnum | Prisma.AuthScalarFieldEnum[];
};
/**
 * Auth findMany
 */
export type AuthFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * Filter, which Auths to fetch.
     */
    where?: Prisma.AuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Auths to fetch.
     */
    orderBy?: Prisma.AuthOrderByWithRelationInput | Prisma.AuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Auths.
     */
    cursor?: Prisma.AuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Auths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Auths.
     */
    distinct?: Prisma.AuthScalarFieldEnum | Prisma.AuthScalarFieldEnum[];
};
/**
 * Auth create
 */
export type AuthCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * The data needed to create a Auth.
     */
    data: Prisma.XOR<Prisma.AuthCreateInput, Prisma.AuthUncheckedCreateInput>;
};
/**
 * Auth createMany
 */
export type AuthCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: Prisma.AuthCreateManyInput | Prisma.AuthCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Auth createManyAndReturn
 */
export type AuthCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * The data used to create many Auths.
     */
    data: Prisma.AuthCreateManyInput | Prisma.AuthCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Auth update
 */
export type AuthUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * The data needed to update a Auth.
     */
    data: Prisma.XOR<Prisma.AuthUpdateInput, Prisma.AuthUncheckedUpdateInput>;
    /**
     * Choose, which Auth to update.
     */
    where: Prisma.AuthWhereUniqueInput;
};
/**
 * Auth updateMany
 */
export type AuthUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: Prisma.XOR<Prisma.AuthUpdateManyMutationInput, Prisma.AuthUncheckedUpdateManyInput>;
    /**
     * Filter which Auths to update
     */
    where?: Prisma.AuthWhereInput;
    /**
     * Limit how many Auths to update.
     */
    limit?: number;
};
/**
 * Auth updateManyAndReturn
 */
export type AuthUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * The data used to update Auths.
     */
    data: Prisma.XOR<Prisma.AuthUpdateManyMutationInput, Prisma.AuthUncheckedUpdateManyInput>;
    /**
     * Filter which Auths to update
     */
    where?: Prisma.AuthWhereInput;
    /**
     * Limit how many Auths to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Auth upsert
 */
export type AuthUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: Prisma.AuthWhereUniqueInput;
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: Prisma.XOR<Prisma.AuthCreateInput, Prisma.AuthUncheckedCreateInput>;
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AuthUpdateInput, Prisma.AuthUncheckedUpdateInput>;
};
/**
 * Auth delete
 */
export type AuthDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
    /**
     * Filter which Auth to delete.
     */
    where: Prisma.AuthWhereUniqueInput;
};
/**
 * Auth deleteMany
 */
export type AuthDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: Prisma.AuthWhereInput;
    /**
     * Limit how many Auths to delete.
     */
    limit?: number;
};
/**
 * Auth without action
 */
export type AuthDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: Prisma.AuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Auth
     */
    omit?: Prisma.AuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Auth.d.ts.map