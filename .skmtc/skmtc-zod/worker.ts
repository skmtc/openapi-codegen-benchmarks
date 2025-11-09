
import toWorker from 'jsr:@skmtc/worker'
import skmtcGenZod from '@skmtc/gen-zod'

export default toWorker(() => Object.fromEntries([skmtcGenZod].map(g => [g.id, g])))