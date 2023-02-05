def have_problem_fact(ProblemFact):
    # ProblemFact = ProblemFact.split(",")
    ProblemFact = list(map(lambda x: x.upper().strip(), ProblemFact))
    # Have Problem Fact?
    if any('NIL' not in s for s in ProblemFact):
        # True
        # Insert Problem Fact into BB
        return list(ProblemFact)
    else:
        # False
        return list([])


def check_starting_node_and_concluding_node(Rules):
    Starting_Node = []
    Concluding_Node = []
    allfact = []
    allconclude = []
    # setup a set of fact and conclude
    for rule in Rules:
        if 'fact1' in rule and rule['fact1'] not in allfact:
            allfact.append(rule['fact1'])
        if 'fact2' in rule and rule['fact2'] not in allfact:
            allfact.append(rule['fact2'])
        if 'conclude1' in rule and rule['conclude1'] not in allconclude:
            allconclude.append(rule['conclude1'])
        if 'conclude2' in rule and rule['conclude2'] not in allconclude:
            allconclude.append(rule['conclude2'])

    # convert list into dict
    allfact = set(allfact)
    allconclude = set(allconclude)

    # find a different() for starting node and concluding node
    Starting_Node = list(allfact.difference(allconclude))
    Concluding_Node = list(allconclude.difference(allfact))

    return Starting_Node, Concluding_Node


def get_premise(rule):
    premises = []
    if 'fact1' in rule and rule['fact1'] not in premises:
        premises.append(rule['fact1'])
    if 'fact2' in rule and rule['fact2'] not in premises:
        premises.append(rule['fact2'])
    return premises


def get_description(premise, rule):
    if rule['fact1'] == premise:
        return rule['fact1_description']
    elif rule['fact2'] == premise:
        return rule['fact2_description']


def get_prefix(rule):
    if 'fact1_prefix' in rule and 'fact2_prefix' in rule:
        return [rule['fact1_prefix'],
                rule['fact2_prefix']]
    else:
        return [rule['fact1_prefix']]


def get_premise_prefix(premise, rule):
    if rule['fact1'] == premise:
        return rule['fact1_prefix']
    elif rule['fact2'] == premise:
        return rule['fact2_prefix']


def inference_engine(Rules, ProblemFact, prev_asked_premise):
    # Start
    # Have Problem Fact?
    BB = have_problem_fact(ProblemFact=ProblemFact)
    # Load KB
    KB = list(Rules)

    # Check Starting node Check Concluding node
    starting_node, concluding_node = check_starting_node_and_concluding_node(
        Rules=KB)

    remained_rules = list(KB)
    getFirstRule = False
    asked_premise = []
    if len(prev_asked_premise) > 0:
        asked_premise = list(prev_asked_premise)
    while True:
        getFirstRule = False
        for rule in remained_rules:
            if getFirstRule:
                break
            premises = get_premise(rule=rule)
            prefixs = get_prefix(rule=rule)
            for premise in premises:
                description = get_description(premise=premise, rule=rule)
                prefix = get_premise_prefix(premise=premise, rule=rule)

                if prefix == "None":
                    if premise in BB:
                        if premise == premises[-1]:
                            if prefixs[0] == "None":
                                if premises[0] not in BB:
                                    continue
                            else:
                                if premises[0] in BB:
                                    continue
                        if 'operator' in rule and rule['operator'] == "AND" and premise != premises[-1]:
                            continue
                        else:
                            remained_rules.remove(rule)
                            if 'conclude1' in rule and rule['conclude1'] not in BB:
                                BB.append(rule['conclude1'])
                            if 'conclude2' in rule and rule['conclude2'] not in BB:
                                BB.append(rule['conclude2'])
                            getFirstRule = True
                            break
                    else:
                        if premise in starting_node and premise not in asked_premise:
                            if premise not in asked_premise:
                                asked_premise.append(premise)
                            queryString = "Is fact [ {} ({}) ] (True / False) ? : "

                            return {
                                "status": 'queryFromUser',
                                "queryString": queryString.format(premise, description),
                                "BB": BB,
                                "premise": premise,
                                "asked_premises": asked_premise
                            }
                        else:
                            continue
                elif prefix == "NOT":
                    if premise not in BB:
                        if premise == premises[-1]:
                            if prefixs[0] == "None":
                                if premises[0] not in BB:
                                    continue
                            else:
                                if premises[0] in BB:
                                    continue
                        if 'operator' in rule and rule['operator'] == "AND" and premise != premises[-1]:
                            continue
                        else:
                            remained_rules.remove(rule)
                            if 'conclude1' in rule and rule['conclude1'] not in BB:
                                BB.append(rule['conclude1'])
                            if 'conclude2' in rule and rule['conclude2'] not in BB:
                                BB.append(rule['conclude2'])
                            getFirstRule = True
                            break
                    else:
                        if premise in starting_node and premise not in asked_premise:
                            if premise not in asked_premise:
                                asked_premise.append(premise)
                            queryString = "Is fact [ {} ({}) ] (True / False) ? : "

                            return {
                                "status": 'queryFromUser',
                                "queryString": queryString.format(premise, description),
                                "BB": BB,
                                "premise": premise,
                                "asked_premises": asked_premise
                            }
                        else:
                            continue

        if not getFirstRule:
            break
    answers = list(set(concluding_node).intersection(set(BB)))
    represented_answer = []
    answerObj = []
    for answer in answers:
        for rule in Rules:
            if 'conclude1_description' in rule:
                if rule['conclude1'] == answer and answer not in represented_answer:
                    represented_answer.append(answer)
                    answerObj.append(
                        str(answer + " (" + rule['conclude1_description'] + ")"))
            if 'conclude2_description' in rule:
                if rule['conclude2'] == answer and answer not in represented_answer:
                    represented_answer.append(answer)
                    answerObj.append(
                        str(answer + " (" + rule['conclude2_description'] + ")"))
    return {
        'status': "successInference",
        'workingmemory': BB,
        'concluding': answerObj,
    }
