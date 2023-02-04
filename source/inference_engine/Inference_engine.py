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


def premiseMatchedBB(premise, BB):
    print(premise, BB)


def inference_engine(Rules, ProblemFact, prev_asked_premise):
    # Start
    # Have Problem Fact?
    BB = have_problem_fact(ProblemFact=ProblemFact)

    # Load KB
    KB = list(Rules)

    # Check Starting node Check Concluding node
    starting_node, concluding_node = check_starting_node_and_concluding_node(
        Rules=KB)

    fired_rules = []
    remained_rules = list(KB)
    getFirstRule = False
    asked_premise = []
    if len(prev_asked_premise) > 0:
        asked_premise = list(prev_asked_premise)
    print(BB)
    while True:
        getFirstRule = False
        for rule in remained_rules:
            if getFirstRule:
                break
            premises = get_premise(rule=rule)
            for premise in premises:
                if premise in BB:
                    if premise == premises[-1] and premises[0] not in BB:
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
                        queryString = "Is {} True / False ? : "

                        return {
                            "status": 'queryFromUser',
                            "queryString": queryString.format(premise),
                            "BB": BB,
                            "premise": premise,
                            "asked_premises": asked_premise
                        }

                        # userInput = input(queryString.format(premise)).upper()
                        # if userInput == "TRUE" or userInput == "T":
                        #     if premise not in BB:
                        #         BB.append(premise)
                        #     getFirstRule = True
                        #     break
                        # else:
                        #     continue
                    else:
                        continue
        if not getFirstRule:
            break
    answer = list(set(concluding_node).intersection(set(BB)))
    return {
        'status': "successInference",
        'workingmemory': BB,
        'concluding': answer,
    }
