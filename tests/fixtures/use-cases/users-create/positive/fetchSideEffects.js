import Action     from '../../../../../lib/domain-model/Action.mjs';
import User       from '../../../../../lib/domain-model/User.mjs';

import dumpEntity from '../../../../utils/dumpEntity.mjs';

export default async function fetchSideEffects({ userId }) {
    const user = await User.findById(userId);
    const actions = await Action.findAll({ where: { data: { '"userId"': userId } } });

    return {
        user    : dumpEntity(user),
        actions : actions.map(dumpEntity)
    };
}
